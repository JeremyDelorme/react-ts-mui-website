import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { getFirestore, collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

const HomePage = () => {
    const [movies, setMovies] = useState<QueryDocumentSnapshot[]>([]);

    useEffect(() => {
        // Fetch movies from Firestore
        const fetchMovies = async () => {
            const db = getFirestore();
            const moviesCollection = collection(db, 'movies');
            const querySnapshot = await getDocs(moviesCollection);
            const moviesData = querySnapshot.docs;
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    return (
        <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Grid container spacing={4}>
                {movies.map((movie, index) => {
                    const movieData = movie.data(); // Access the data using the data method
                    return (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 5 }}>
                                <CardMedia
                                    component="img"
                                    alt={movieData.Name} // Adjust property name
                                    height="140"
                                    image={movieData.PosterImage} // Adjust property name
                                    sx={{ opacity: 0.3 }}
                                />
                                <CardContent>
                                    <Typography variant="h1" component="div">
                                        {movieData.Director} {/* Display Director as h1 */}
                                    </Typography>
                                    <Typography variant="h2" component="div">
                                        {movieData.Name} {/* Display Name as h2 */}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={`/movies/${movieData.Name}`} size="small">
                                        More Info
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default HomePage;
