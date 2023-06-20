import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvlfrPMnYpPfmm01M4_bcW1YpHruPmwH0",
  authDomain: "conference-room-c60cd.firebaseapp.com",
  projectId: "conference-room-c60cd",
  storageBucket: "conference-room-c60cd.appspot.com",
  messagingSenderId: "318142906271",
  appId: "1:318142906271:web:ea88d6d88b1e116afe87aa",
  measurementId: "G-K9TCJJKG2D"
}

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
