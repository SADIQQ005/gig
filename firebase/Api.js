import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyClWWPT0KRskJuq3YNfMhsZVR5rbvSiec4",
  authDomain: "live-26a90.firebaseapp.com",
  projectId: "live-26a90",
  storageBucket: "live-26a90.appspot.com",
  messagingSenderId: "791370779559",
  appId: "1:791370779559:web:4153c0f264675b0d9bc482",
  measurementId: "G-NQ30XF3XZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth };
