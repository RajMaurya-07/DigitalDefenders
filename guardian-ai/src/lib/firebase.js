// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZkDFgEaWkb_masIFaI0DqmiCIxFR4ZOI",
  authDomain: "guardianai-15e86.firebaseapp.com",
  projectId: "guardianai-15e86",
  storageBucket: "guardianai-15e86.firebasestorage.app",
  messagingSenderId: "393419295652",
  appId: "1:393419295652:web:2a0af47a5df7d01e568f31",
  measurementId: "G-5NBKQHRVHM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);