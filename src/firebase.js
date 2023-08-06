// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEBkPyx9YhqMW62VgRhomC2D0iwDTYWeQ",
  authDomain: "tasker-app-b9c01.firebaseapp.com",
  projectId: "tasker-app-b9c01",
  storageBucket: "tasker-app-b9c01.appspot.com",
  messagingSenderId: "631746740969",
  appId: "1:631746740969:web:d8b1d2c3650a4e331a6678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)