from firebase_functions import https_fn
from firebase_admin import initialize_app
from firebase_config import db
import pandas as pd
import os
import json

@https_fn.on_request(region="asia-northeast3")
def excel_data(req: https_fn.Request) -> https_fn.Response:
    try:
        collection = req.args.get("collection")
        address = req.args.get("address") # address는 프런트에 받아올 경로
        
        if not collection:
            return https_fn.Response(json.dumps({"code": 400, "error": "컬렉션 이름이 없습니다."}, ensure_ascii=False), status=400, mimetype="application/json")

        docs = db.collection(collection).get()
        if not docs:
            return https_fn.Response(json.dumps({"code": 404, "error": "해당 컬렉션에 문서가 없습니다."}, ensure_ascii=False), status=404, mimetype="application/json")

        data = [{"id": doc.id, **doc.to_dict()} for doc in docs]
        
        # Firestore 데이터를 문자열로 변환
        for item in data:
            for key, value in item.items():
                if isinstance(value, dict) or isinstance(value, list):
                    item[key] = json.dumps(value, ensure_ascii=False)  # JSON 문자열로 변환
                elif hasattr(value, 'isoformat'):  # Timestamp 객체 변환
                    item[key] = value.isoformat()
       
        os.makedirs(address, exist_ok=True)
        file_path = os.path.join(address, f"{collection}.xlsx")  

        df = pd.DataFrame(data, dtype=str)
        df.to_excel(file_path, index=False)
        
        return https_fn.Response(json.dumps({"code": 200, "message": "변환 완료"}, ensure_ascii=False), status=200, mimetype="application/json")
    
    except Exception as e:
        return https_fn.Response(json.dumps({"code": 500, "error": "서버 오류 발생"}, ensure_ascii=False), status=500, mimetype="application/json")