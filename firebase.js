// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjm8nNSbgdoOY6TZMnVF1pNqcK00xXhc0",
  authDomain: "portefolio-e5420.firebaseapp.com",
  projectId: "portefolio-e5420",
  storageBucket: "portefolio-e5420.appspot.com",
  messagingSenderId: "1057761030597",
  appId: "1:1057761030597:web:873d03e138158dda5adbac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;

export { auth };
