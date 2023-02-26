// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider , signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPLEhV2HzeLCyxp2ehnO6-D_g6uhZhyLY",
  authDomain: "blog-de125.firebaseapp.com",
  projectId: "blog-de125",
  storageBucket: "blog-de125.appspot.com",
  messagingSenderId: "485051986916",
  appId: "1:485051986916:web:654cb4455a345c1329cdf1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider()

export {db , auth, provider, storage  , signInWithEmailAndPassword, createUserWithEmailAndPassword}
