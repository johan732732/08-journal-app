// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"; // Firestore Lite
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKImbJTfvjKm7wNKsPUjqwze9Zts6yZs0",
  authDomain: "react-cursos-cd8f7.firebaseapp.com",
  projectId: "react-cursos-cd8f7",
  storageBucket: "react-cursos-cd8f7.firebasestorage.app",
  messagingSenderId: "905484648082",
  appId: "1:905484648082:web:34a8f027f82e4bd560304b",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
