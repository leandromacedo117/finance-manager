// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD7ZQKmuu20QCOVk0ntpUU4QROHkXxir6I",
  authDomain: "finance-manager-87141.firebaseapp.com",
  projectId: "finance-manager-87141",
  storageBucket: "finance-manager-87141.appspot.com",
  messagingSenderId: "262620117736",
  appId: "1:262620117736:web:74179600b6ba6c6ceb275d",
  measurementId: "G-PC0J3YXS1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

// /11
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });