import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCDpyniKTgXjQtCx1-ZP4SutYSEj4MKH-U",
  authDomain: "backend-rakhaprs.firebaseapp.com",
  projectId: "backend-rakhaprs",
  storageBucket: "backend-rakhaprs.appspot.com",
  messagingSenderId: "924814636169",
  appId: "1:924814636169:web:7730b1fee656051c960258",
  measurementId: "G-355MM9XMBK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
