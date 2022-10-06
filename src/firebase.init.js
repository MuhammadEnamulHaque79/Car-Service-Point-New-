// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkoZr2zcmVKZSiOBUmNthVqOUjKXuxNQ",
  authDomain: "my-firebase-recap-app.firebaseapp.com",
  projectId: "my-firebase-recap-app",
  storageBucket: "my-firebase-recap-app.appspot.com",
  messagingSenderId: "964378097395",
  appId: "1:964378097395:web:2005ef16312e52563ce986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;