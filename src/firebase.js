import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

    projectId: "my-firebase-26632",

    storageBucket: "my-firebase-26632.appspot.com",

    messagingSenderId: "900766267547",

    appId: process.env.REACT_APP_FIREBASE_APP_ID

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);