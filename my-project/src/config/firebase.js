// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAid4pduW99OwB0kUAWtFKElGJI9_MJV_U",
  authDomain: "our-tract-387606.firebaseapp.com",
  projectId: "our-tract-387606",
  storageBucket: "our-tract-387606.appspot.com",
  messagingSenderId: "463723905461",
  appId: "1:463723905461:web:ade5034c31e083ea3659fc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);