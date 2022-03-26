import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOhpU1FpKKVMLGUpPhIzzE9Pta71VFKvc",
  authDomain: "chap-app-75bd9.firebaseapp.com",
  projectId: "chap-app-75bd9",
  storageBucket: "chap-app-75bd9.appspot.com",
  messagingSenderId: "381394942026",
  appId: "1:381394942026:web:ff8f3afaf698392a45ceb3",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);