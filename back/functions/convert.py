from firebase_functions import https_fn
from firebase_admin import initialize_app
import firebase_admin
from firebase_admin import credentials, firestore, storage

@https_fn.on_request()
def convert(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello world!")