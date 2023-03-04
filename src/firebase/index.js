// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn4LhKuIqLHii0V-5RSKLB6LcLSqCzU14",
  authDomain: "ai-club-website.firebaseapp.com",
  projectId: "ai-club-website",
  storageBucket: "ai-club-website.appspot.com",
  messagingSenderId: "295864976747",
  appId: "1:295864976747:web:55715fffd4759e5ce6782e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }
const db = getFirestore(app);
export { db }
