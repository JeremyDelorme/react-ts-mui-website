// src/components/Movies.tsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesCollection = collection(db, 'movies');
            const moviesSnapshot = await getDocs(moviesCollection);
            const moviesData = moviesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
