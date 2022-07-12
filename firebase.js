// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE7dQAtQTdIN0CvUbZ4C9svI-SyzMh6tc",
  authDomain: "facebook-67d6c.firebaseapp.com",
  projectId: "facebook-67d6c",
  storageBucket: "facebook-67d6c.appspot.com",
  messagingSenderId: "715305573398",
  appId: "1:715305573398:web:3f064faed422cac30ce937",
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { db, storage };
