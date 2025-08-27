// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjqCfWPW2Fzq1SUUXqWM_0R3zLtiBoGb4",
  authDomain: "todo-list-app-f195d.firebaseapp.com",
  projectId: "todo-list-app-f195d",
  storageBucket: "todo-list-app-f195d.firebasestorage.app",
  messagingSenderId: "705694503007",
  appId: "1:705694503007:web:e45b3dd9c9ba44168d8bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Conexión a Firestore