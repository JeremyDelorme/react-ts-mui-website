// src/scripts/addMoviesToFirestore.ts
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import * as moviesData from '../models/Movie.json';

const firebaseConfig = {
    // Your Firebase config here
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
