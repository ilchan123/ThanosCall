from firebase_functions import https_fn
from firebase_admin import initialize_app
import firebase_admin
from firebase_admin import credentials, firestore, storage
from openai import OpenAI
import requests
import os
import json
from dotenv import load_dotenv
import sys

# Python 출력 인코딩을 UTF-8로 설정
sys.stdout.reconfigure(encoding='utf-8')

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

# Firebase 서비스 계정 키 파일 경로
cred = credentials.Certificate('serviceAccountKey.json')
# Firebase 앱 초기화
firebase_admin.initialize_app(cred,{
    'projectId': 'thanoscall-30729',
    'storageBucket': 'thanoscall-30729.firebasestorage.app',
    })
# 데이터 베이스 연결
db = firestore.Client(database="infinitystone")
# storage 연결
bucket = storage.bucket()
    

def get_audio(file_url, input_path):
    """Firebase Storage에서 파일 다운로드"""
    response = requests.get(file_url)
    if response.ok:
        with open(input_path, 'wb') as file:
            file.write(response.content)
        return True
    return False

def transcribe_audio(input_path, output_path):
    """음성 파일을 OpenAI Whisper로 변환 후 텍스트로 저장"""
    transcript_text = ""  # 텍스트 저장용 변수
    # 음성 파일을 읽어서 OpenAI Whisper API 호출
    with open(input_path, "rb") as audio_file:
        transcription = client.audio.transcriptions.create(
        model="whisper-1", 
        file=audio_file
    )
    # Whisper API 응답에서 변환된 텍스트 가져오기
    transcript_text = transcription.text  # API 응답에서 변환된 텍스트
    # 변환된 텍스트를 .txt 파일로 저장
    with open(output_path, "w", encoding="utf-8") as file:
        file.write(transcript_text)  # 파일에 저장
    
    return transcript_text  # 변환된 텍스트 반환

def upload_firebase(file_path, storage_path):
    """Firebase Storage에 .txt 파일 업로드"""
    blob = bucket.blob(storage_path)
    blob.upload_from_filename(file_path, content_type="text/plain")
    blob.make_public()  # 파일을 공개적으로 접근할 수 있도록 설정
    return blob.public_url  # Storage에서 다운로드 가능한 URL 반환

@https_fn.on_request(region="asia-northeast3")
def start_whisper(req: https_fn.Request) -> https_fn.Response:
    """음성 파일을 변환하고 Storage 와 Firestore에 저장"""
    try:
        # Firestore에서 `voice` URL 가져오기
        collection = req.args.get("collection")
        doc_id = req.args.get("doc_id")
        
        if not collection or not doc_id:
            return https_fn.Response(json.dumps({"code": 400,"error": "컬렉션 이름 또는 문서 ID가 없습니다."}, ensure_ascii=False), status=400, mimetype="application/json")
        
        doc_ref = db.collection(collection).document(doc_id)
        doc = doc_ref.get()
        if not doc.exists:
            return https_fn.Response(json.dumps({"code": 404,"error": "해당 문서를 찾을 수 없습니다."}, ensure_ascii=False), status=404, mimetype="application/json")

        file_url = doc.to_dict().get("voice")
        if not file_url:
            return https_fn.Response(json.dumps({"code": 404, "error": "파일 URL이 없습니다."}, ensure_ascii=False), status=404, mimetype="application/json")

        # 경로 설정
        input_path = f"temp/audio_{doc_ref.id}.mp3"
        output_path = f"temp/text_{doc_ref.id}.txt"
        # temp 디렉토리가 존재하지 않으면 자동으로 생성
        os.makedirs(os.path.dirname(input_path), exist_ok=True)
        
        # 음성 파일 불러오기
        if not get_audio(file_url, input_path):
            return https_fn.Response(json.dumps({"code": 500, "error": "음성 파일 불러오기 실패"}, ensure_ascii=False), status=500, mimetype="application/json")

        # 음성을 텍스트로 변환 후 .txt 파일로 저장
        transcribe_audio(input_path, output_path)

        # Firebase Storage에 변환된 .txt 파일 업로드
        storage_file_path = f"text/{doc_ref.id}.txt"  # Storage 내 저장 경로
        transcript_url = upload_firebase(output_path, storage_file_path)

        # Firestore의 `text` 필드에 변환된 파일 URL 저장
        doc_ref.update({"text": json.dumps(transcript_url, ensure_ascii=False)})
        
        #작업 완료 후 파일을 삭제
        os.remove(input_path)
        os.remove(output_path)

        return https_fn.Response(json.dumps({"code": 200,"message": "변환 완료", "url": transcript_url}, ensure_ascii=False), status=200, mimetype="application/json")

    except Exception as e:
        return https_fn.Response(json.dumps({"code": 500,"error": "서버 오류 발생"}, ensure_ascii=False), status=500, mimetype="application/json")