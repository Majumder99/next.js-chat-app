// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo-OppkOZSCAPFIFCuuRy7crNuvrPgyAg",
  authDomain: "nextjs-chat-app-94f02.firebaseapp.com",
  projectId: "nextjs-chat-app-94f02",
  storageBucket: "nextjs-chat-app-94f02.appspot.com",
  messagingSenderId: "437775408620",
  appId: "1:437775408620:web:2b904557e2eadf138ef4c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
