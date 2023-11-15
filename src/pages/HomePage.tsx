// src/pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { getFirestore, collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

// Import the font
import '@fontsource/roboto';

// Define the Movie type based on your data structure
interface Movie {
    title: string;
    shortDescription: string;
    director: string;
    // Add other properties as needed
    posterImage: string;
}

const HomePage = () => {
    const [movies, setMovies] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const db = getFirestore();
            const moviesCollection = collection(db, 'movies');
            const querySnapshot = await getDocs(moviesCollection);
            const moviesData = querySnapshot.docs;
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    const handleCardClick = (movie: QueryDocumentSnapshot<DocumentData>) => {
        const movieData: Movie = movie.data() as Movie;
        console.log('Clicked movie:', movieData);
        console.log('poster image path:', movieData.posterImage);

        setSelectedMovie(movieData);
    };

    return (
        <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Grid container spacing={4}>
                {movies.map((movie, index) => {
                    const movieData: Movie = movie.data() as Movie;

                    return (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    boxShadow: 5,
                                    position: 'relative',
                                    height: '100%',
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': {
                                        boxShadow: 8,
                                    },
                                    background: 'linear-gradient(to bottom, #00161f, #00416b)',
                                    color: '#ffffff',
                                    fontFamily: 'Bungee, sans-serif',
                                }}
                                onClick={() => handleCardClick(movie)}
                            >
                                <CardMedia
                                    component="img"
                                    alt={movieData.title}
                                    height="140"
                                    image={movieData.posterImage}
                                    sx={{ opacity: 0.3 }}
                                />
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '30%', // Adjust the height value as needed
                                    }}
                                >
                                    <div>
                                        <Typography variant="h3" component="div" sx={{ margin: '8px 0', letterSpacing: '2px', color: '#808080' }}>
                                            {movieData.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginBottom: '8px', letterSpacing: '1px', color: '#808080' }}>
                                            {movieData.shortDescription}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="h6" sx={{ margin: '8px 0', letterSpacing: '1px', color: '#808080' }}>
                                            {movieData.director}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Info</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <Dialog open={!!selectedMovie} onClose={() => setSelectedMovie(null)}>
                {selectedMovie && (
                    <>
                        <DialogTitle>{selectedMovie.title}</DialogTitle>
                        <DialogContent>
                            <Typography>{selectedMovie.shortDescription}</Typography>
                            <Typography>Director: {selectedMovie.director}</Typography>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default HomePage;
