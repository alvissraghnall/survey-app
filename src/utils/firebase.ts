// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkOW2DflI2Wd9HXaBu5g4bJeNbwDJXKx8",
  authDomain: "survey-7d4f0.firebaseapp.com",
  projectId: "survey-7d4f0",
  storageBucket: "survey-7d4f0.appspot.com",
  messagingSenderId: "243847964645",
  appId: "1:243847964645:web:c627780890b7a14e2f710c",
  measurementId: "G-9ZJFLZFZWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);