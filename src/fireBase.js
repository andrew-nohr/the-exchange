import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ7npkuqhZD9fgHeJqaTeXDjyiEmdnI20",
  authDomain: "thee-exchange.firebaseapp.com",
  projectId: "thee-exchange",
  storageBucket: "thee-exchange.appspot.com",
  messagingSenderId: "55016199369",
  appId: "1:55016199369:web:fa0ba49dc779f613e62918",
  measurementId: "G-TW9508R2H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore(app);


export { auth, db }