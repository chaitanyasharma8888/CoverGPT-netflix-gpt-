// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPqeLIfk_CAiOBZcSo6xZ_r5u_gcp1gOc",
  authDomain: "netflixgpt-c65ce.firebaseapp.com",
  projectId: "netflixgpt-c65ce",
  storageBucket: "netflixgpt-c65ce.firebasestorage.app",
  messagingSenderId: "1039064467247",
  appId: "1:1039064467247:web:be32c2e034b99c539043da",
  measurementId: "G-YW026FW56N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();