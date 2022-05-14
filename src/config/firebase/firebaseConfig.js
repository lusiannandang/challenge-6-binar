// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdqvm-8YsRGLghYINSEiRzy_x9bM-6O-4",
  authDomain: "react-login-sosmed-9c27b.firebaseapp.com",
  projectId: "react-login-sosmed-9c27b",
  storageBucket: "react-login-sosmed-9c27b.appspot.com",
  messagingSenderId: "143022179753",
  appId: "1:143022179753:web:963ce7de23cecdab8af0b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
