// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_FUZh6aytMGYPHa715JdMCnSZCw-sPLc",
  authDomain: "workoutbuddy-614d1.firebaseapp.com",
  projectId: "workoutbuddy-614d1",
  storageBucket: "workoutbuddy-614d1.appspot.com",
  messagingSenderId: "39244420450",
  appId: "1:39244420450:web:3175f2251f9743c699483b",
  measurementId: "G-6FJ01HWTBP",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const AUTH = getAuth(FIREBASE_APP);
export const DB = getFirestore(FIREBASE_APP);