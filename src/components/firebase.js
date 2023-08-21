// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjmjOxYGdRbBx8TyhX4LUxDzI-gWCRGOw",
  authDomain: "vanlife-8603e.firebaseapp.com",
  projectId: "vanlife-8603e",
  storageBucket: "vanlife-8603e.appspot.com",
  messagingSenderId: "1062323468088",
  appId: "1:1062323468088:web:5aa4cd496e4f593d6f33cd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
