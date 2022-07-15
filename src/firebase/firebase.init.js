// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLdef9AolQJtOPqMex1VgNiRohu6yGGNk",
    authDomain: "best-buy-ee029.firebaseapp.com",
    projectId: "best-buy-ee029",
    storageBucket: "best-buy-ee029.appspot.com",
    messagingSenderId: "794563175287",
    appId: "1:794563175287:web:570c4b5e948bb8fdfef772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;