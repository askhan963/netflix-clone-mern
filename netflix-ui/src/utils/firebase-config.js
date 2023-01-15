// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO0b9kwD9UOqAqRaYMmz64_gs3jirUi8w",
  authDomain: "react-clone-app-1c1c5.firebaseapp.com",
  projectId: "react-clone-app-1c1c5",
  storageBucket: "react-clone-app-1c1c5.appspot.com",
  messagingSenderId: "434147184233",
  appId: "1:434147184233:web:63d28064a8c85dce9e1cf8",
  measurementId: "G-EZ80V85F5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);