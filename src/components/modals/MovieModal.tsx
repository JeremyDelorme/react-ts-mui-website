// src/components/modals/MovieModal.tsx
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

interface MovieModalProps {
    open: boolean;
    onClose: () => void;
    movieData: {
        title: string;
        shortDescription: string;
        director: string;
        posterImage: string;
    } | null;
}

const MovieModal: React.FC<MovieModalProps> = ({ open, onClose, movieData }) => {
    if (!movieData) {
        return null;
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{movieData.title}</DialogTitle>
            <DialogContent sx={{ background: 'linear-gradient(to bottom, #FFFFFF, #EBB027)', color: '#ffffff' }}>
                <img src={movieData.posterImage} alt={movieData.title} style={{ width: '100%', height: '100%' }} />
                <Typography variant="h3" sx={{ margin: '8px 0', letterSpacing: '2px' }}>
                    {movieData.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px', letterSpacing: '1px' }}>
                    {movieData.shortDescription}
                </Typography>
                <Typography variant="h6" sx={{ margin: '8px 0', letterSpacing: '1px' }}>
                    {movieData.director}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default MovieModal;
