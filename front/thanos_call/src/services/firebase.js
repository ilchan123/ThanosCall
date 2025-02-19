import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCF3kR7EqOBTc7145gsjJMQyoFj3Knwyjk",
  authDomain: "thanoscall-30729.firebaseapp.com",
  projectId: "thanoscall-30729",
  storageBucket: "thanoscall-30729.firebasestorage.app",
  messagingSenderId: "422555274700",
  appId: "1:422555274700:web:726ffdd4b3f1fdf0242169",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app, "infinitystone")
export { db, collection, getDocs, query, where }
