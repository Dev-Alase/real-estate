// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-23452.firebaseapp.com",
  projectId: "mern-estate-23452",
  storageBucket: "mern-estate-23452.appspot.com",
  messagingSenderId: "202430051715",
  appId: "1:202430051715:web:5eeaefa074b5e314b332b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);