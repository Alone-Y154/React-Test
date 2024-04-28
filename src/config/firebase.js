// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX4JmtawSLzG3EmXRi4RgoU6ksjKDalg0",
  authDomain: "social-links-alone-y154.firebaseapp.com",
  projectId: "social-links-alone-y154",
  storageBucket: "social-links-alone-y154.appspot.com",
  messagingSenderId: "554648650503",
  appId: "1:554648650503:web:0b0b972fc67658140b7ba2"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);

export const auth =  getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();