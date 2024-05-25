// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFd05HuB9kHX0f1I8Ep08ayOdVXnCJXTI",
  authDomain: "react-myntra-clone.firebaseapp.com",
  projectId: "react-myntra-clone",
  storageBucket: "react-myntra-clone.appspot.com",
  messagingSenderId: "336678057765",
  appId: "1:336678057765:web:4f33af546dfd0683b60ccc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
