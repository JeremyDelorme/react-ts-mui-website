// src/components/MovieForm.tsx
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const MovieForm: React.FC = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const moviesCollection = collection(db, 'movies');
            await addDoc(moviesCollection, { title });
            console.log('Movie added successfully!');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;
