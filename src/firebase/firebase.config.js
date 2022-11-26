// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAzqxg7EXOKurUCr4_zpX0U1OzL2WX2x8",
  authDomain: "second-hand-furniture.firebaseapp.com",
  projectId: "second-hand-furniture",
  storageBucket: "second-hand-furniture.appspot.com",
  messagingSenderId: "17176791437",
  appId: "1:17176791437:web:7298701518a8d6be1655c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;