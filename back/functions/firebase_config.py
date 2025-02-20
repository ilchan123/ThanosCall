import firebase_admin
from firebase_admin import credentials, firestore, storage

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