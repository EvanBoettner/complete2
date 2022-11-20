// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUw3oYRToxlKLKMgVvBelvOAp6l7WI6l4",
  authDomain: "completed-e4229.firebaseapp.com",
  projectId: "completed-e4229",
  storageBucket: "completed-e4229.appspot.com",
  messagingSenderId: "169297419023",
  appId: "1:169297419023:web:a702d7e19b66d57b517c7a",
  measurementId: "G-HQ16T1YWFM",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
