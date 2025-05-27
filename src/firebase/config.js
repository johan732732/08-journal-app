// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"; // Firestore Lite
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Dev/Prod Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCKImbJTfvjKm7wNKsPUjqwze9Zts6yZs0",
//   authDomain: "react-cursos-cd8f7.firebaseapp.com",
//   projectId: "react-cursos-cd8f7",
//   storageBucket: "react-cursos-cd8f7.firebasestorage.app",
//   messagingSenderId: "905484648082",
//   appId: "1:905484648082:web:34a8f027f82e4bd560304b",
// };

//Testing Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBjwEkGwwDoBlc9gmFGkkkhq-UqoiMS68",
  authDomain: "react-firebase-testing-a8500.firebaseapp.com",
  projectId: "react-firebase-testing-a8500",
  storageBucket: "react-firebase-testing-a8500.firebasestorage.app",
  messagingSenderId: "885361033865",
  appId: "1:885361033865:web:d880d33a50c88737c8bc58",
  measurementId: "G-9CTL38V8CE"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
