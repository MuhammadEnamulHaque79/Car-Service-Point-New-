// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_k3HxC_hs_X8TvSgLkKoLljTCKwJX9I",
  authDomain: "my-practice-app-ebad8.firebaseapp.com",
  projectId: "my-practice-app-ebad8",
  storageBucket: "my-practice-app-ebad8.appspot.com",
  messagingSenderId: "928159504160",
  appId: "1:928159504160:web:78866875b2a35fdf65a945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
