import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfVlKzSBNfzhzzTbNySCNS2rSmJ4VKzmA",
    authDomain: "my-ts-react-website.firebaseapp.com",
    projectId: "my-ts-react-website",
    storageBucket: "my-ts-react-website.appspot.com",
    messagingSenderId: "69831032370",
    appId: "1:69831032370:web:4ae5a0dae0ed8b0148c62b",
    measurementId: "G-7LCKCGHZYF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };