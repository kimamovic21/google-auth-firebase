// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJNe-aafFtBNgjDhiJAbrBD2-pj6t-Ajs",
  authDomain: "auth-yt-efb09.firebaseapp.com",
  projectId: "auth-yt-efb09",
  storageBucket: "auth-yt-efb09.appspot.com",
  messagingSenderId: "887000592463",
  appId: "1:887000592463:web:b059febba3443699623a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);