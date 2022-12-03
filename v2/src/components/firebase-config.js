// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhtymwyvR_mKa-pf4F5_XIibzIIH7HQd4",
  authDomain: "completed2.firebaseapp.com",
  projectId: "completed2",
  storageBucket: "completed2.appspot.com",
  messagingSenderId: "239741775206",
  appId: "1:239741775206:web:299d3141b9379dd2f0aca7",
  measurementId: "G-PC8RZ6DH7D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
