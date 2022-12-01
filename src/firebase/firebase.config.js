// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClLRG7AlVC8zrcWMVXWOmUODM3leWmYA8",
//   authDomain: "doctors-portal-8adc7.firebaseapp.com",
//   projectId: "doctors-portal-8adc7",
//   storageBucket: "doctors-portal-8adc7.appspot.com",
//   messagingSenderId: "1023699006160",
//   appId: "1:1023699006160:web:c72eba76f23e61c45b64d5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default app;