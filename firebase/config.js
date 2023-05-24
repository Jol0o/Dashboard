// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV43-fMcFop_jneqXmt9Qog8eUPlOH5K8",
    authDomain: "dashboard-c424c.firebaseapp.com",
    projectId: "dashboard-c424c",
    storageBucket: "dashboard-c424c.appspot.com",
    messagingSenderId: "720606414605",
    appId: "1:720606414605:web:9fe81052332a52bcdf5244"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)