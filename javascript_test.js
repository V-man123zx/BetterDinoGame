// Write a message to the console.
console.log('hello world!');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoemqIxHbZGbmFfl0u23viu3znQMBWyi4",
  authDomain: "better--dinosaur-game.firebaseapp.com",
  projectId: "better--dinosaur-game",
  storageBucket: "better--dinosaur-game.appspot.com",
  messagingSenderId: "613665869588",
  appId: "1:613665869588:web:e34c25a6c12e211fbcfc01",
  measurementId: "G-6VS8WN9RJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);