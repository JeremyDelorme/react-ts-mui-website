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
import { getFirestore, collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import MovieModal from '../components/modals/MovieModal'; // Import the MovieModal component

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
    const [openModal, setOpenModal] = useState(false); // State to control the modal

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
        setSelectedMovie(movieData);
        setOpenModal(true); // Open the modal on card click
    };

    return (
        <Box sx={{ fontFamily: 'Josefin Slab, sans-serif', mx: 'auto', display: 'flex', justifyContent: 'center', mt: 4, fontWeight: 'bolder' }}>
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
                                    display: 'flex',
                                    flexDirection: 'column',
                                    '&:hover': {
                                        boxShadow: 8,
                                    },
                                    background: 'linear-gradient(to bottom, #FFFFFF, #EBB027 )',
                                    color: '#000',
                                    fontWeight: 'bolder',
                                }}
                                onClick={() => handleCardClick(movie)}
                            >
                                <CardMedia
                                    component="img"
                                    alt={movieData.title}
                                    height="250"
                                    image={movieData.posterImage}
                                    sx={{ opacity: 0.7 }}
                                />
                                <CardContent
                                    sx={{
                                        flex: '1 0 auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        height: '160px', // Set a fixed height for the content
                                        fontFamily: 'Josefin Slab, sans-serif',
                                        fontWeight: 'bold',
                                        padding: '16px',
                                    }}
                                >
                                    <div>
                                        <Typography variant="h5" sx={{ margin: '8px 0', letterSpacing: '2px', color: '#333' }}>
                                            {movieData.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: '8px', letterSpacing: '1px', color: '#000' }}>
                                            {movieData.shortDescription}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="subtitle1" sx={{ margin: '8px 0', letterSpacing: '1px', color: '#555' }}>
                                            Director: {movieData.director}
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '8px',
                                    }}
                                >
                                    <Button
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            fontWeight: 'bolder',
                                            borderRadius: '4px',
                                            background: 'linear-gradient(to bottom, #883E03, #D76206)',
                                            color: '#FFF',
                                            textTransform: 'none',
                                            fontSize: '16px', // Adjust the font size if needed
                                        }}
                                    >
                                        More Info
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            <MovieModal
                movieData={selectedMovie}
                open={openModal}
                onClose={() => setOpenModal(false)} // Close the modal
            />
        </Box>
    );
};

export default HomePage;
