import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQPeHD5Y85jp7FDbe6EcfhkiABTjOdI9k",
  authDomain: "clone-54e14.firebaseapp.com",
  projectId: "clone-54e14",
  storageBucket: "clone-54e14.appspot.com",
  messagingSenderId: "654101244830",
  appId: "1:654101244830:web:6a20c6ee904edd6be0448f",
  measurementId: "G-JFMHKS5CWV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();