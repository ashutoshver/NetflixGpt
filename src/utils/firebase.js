// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0UIaLrmu23Q58uhAxx3bpNTQzPplySi0",
  authDomain: "netflixgpt-aee37.firebaseapp.com",
  projectId: "netflixgpt-aee37",
  storageBucket: "netflixgpt-aee37.firebasestorage.app",
  messagingSenderId: "93221607791",
  appId: "1:93221607791:web:9cd300a3e37711da45b09a",
  measurementId: "G-SSZJW7VEZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();