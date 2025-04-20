// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAkgnUtBja3K7sGoZlbtVw9S5itfRxFJo8",
  authDomain: "interviewprep-b4ae8.firebaseapp.com",
  projectId: "interviewprep-b4ae8",
  storageBucket: "interviewprep-b4ae8.firebasestorage.app",
  messagingSenderId: "801374014815",
  appId: "1:801374014815:web:ec66ea7c86e9b9ee90baea",
  measurementId: "G-2XVVK66EEY"
};

// Initialize Firebase
const app =  !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);