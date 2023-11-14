
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

import moviesData from '../data/moviesData';

const firebaseConfig = {
    apiKey: "AIzaSyBfVlKzSBNfzhzzTbNySCNS2rSmJ4VKzmA",
    authDomain: "my-ts-react-website.firebaseapp.com",
    projectId: "my-ts-react-website",
    storageBucket: "my-ts-react-website.appspot.com",
    messagingSenderId: "69831032370",
    appId: "1:69831032370:web:4ae5a0dae0ed8b0148c62b",
    measurementId: "G-7LCKCGHZYF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const moviesCollection = collection(db, 'movies');

moviesData.forEach(async (movie: any) => {
    try {
        await addDoc(moviesCollection, movie);
        console.log(`Added movie: ${movie.title}`);
    } catch (error) {
        console.error(`Error adding movie: ${movie.title}`, error);
    }
});
