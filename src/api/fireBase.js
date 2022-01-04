
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDuVt7bvvpsKRZ1souRaQyi49G-4GMuI2Q",
  authDomain: "shanilogin22.firebaseapp.com",
  databaseURL: "https://shanilogin22-default-rtdb.firebaseio.com",
  projectId: "shanilogin22",
  storageBucket: "shanilogin22.appspot.com",
  messagingSenderId: "967674026840",
  appId: "1:967674026840:web:b2220de28d18383d3fe32d"
};


const app = initializeApp(firebaseConfig);
const db=getDatabase(app)
export default db

