import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBkjDgvxUDLlBfrt7QtMnv0R_nCW2IHJ3o",
  authDomain: "fruitablesprojects.firebaseapp.com",
  projectId: "fruitablesprojects",
  storageBucket: "fruitablesprojects.appspot.com",
  messagingSenderId: "228652899653",
  appId: "1:228652899653:web:5a4dd7281394fd7cb3322c",
  measurementId: "G-26383CPNBC"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)