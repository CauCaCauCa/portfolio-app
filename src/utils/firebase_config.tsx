import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCfux5qNpOFafCMQMFtgELr9KUaE5Rj3dg",
    authDomain: "lab7-bf9c5.firebaseapp.com",
    projectId: "lab7-bf9c5",
    storageBucket: "lab7-bf9c5.appspot.com",
    messagingSenderId: "373401730899",
    appId: "1:373401730899:web:6ca80113e42c6f26ab2ba6",
    measurementId: "G-GT90C2Z3ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 