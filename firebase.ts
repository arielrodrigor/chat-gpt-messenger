import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxL7Zi-clz55uc7EO6Lci-cHzymYMKESI",
    authDomain: "chatgpt-clone-b93ba.firebaseapp.com",
    projectId: "chatgpt-clone-b93ba",
    storageBucket: "chatgpt-clone-b93ba.appspot.com",
    messagingSenderId: "788714701683",
    appId: "1:788714701683:web:50cf1911fbfc570c937b06"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};