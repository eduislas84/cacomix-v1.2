// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8IcP00eOA9lMjh0KsuIzgDrP8IkbtM0",
  authDomain: "cacomixlearn-1bca2.firebaseapp.com",
  projectId: "cacomixlearn-1bca2",
  storageBucket: "cacomixlearn-1bca2.firebasestorage.app",
  messagingSenderId: "833922596684",
  appId: "1:833922596684:web:a50c0ff8063a5fc0d0d9e9",
  measurementId: "G-B4V66KGCGW"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
