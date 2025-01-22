// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGocxgnQ9vciCS5KDa8tudeGELcvodFO8",
  authDomain: "melody-dda44.firebaseapp.com",
  projectId: "melody-dda44",
  storageBucket: "melody-dda44.firebasestorage.app",
  messagingSenderId: "1077550231222",
  appId: "1:1077550231222:web:7dc0bee8886db50b7b8017",
  measurementId: "G-YWFHK174VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);