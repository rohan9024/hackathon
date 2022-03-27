// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBA2vL90yiy-r3DN0OieRWwErU9vRKHRkE",
    authDomain: "hackathon-grind.firebaseapp.com",
    projectId: "hackathon-grind",
    storageBucket: "hackathon-grind.appspot.com",
    messagingSenderId: "89208894931",
    appId: "1:89208894931:web:21c69962fd81d436382b26",
    measurementId: "G-JF685SFT4D"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)


export { db, auth };

