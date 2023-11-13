// src/components/auth/AuthDetails.tsx
import React from 'react';
import { Button } from '@mui/material';
import { User } from 'firebase/auth'; // Add this import

export interface AuthDetailsProps {
    user: User;
    onSignOut: () => void;
}

const AuthDetails: React.FC<AuthDetailsProps> = ({ user, onSignOut }) => {
    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.email}!</p>
                    <Button onClick={onSignOut} variant="contained" color="secondary">
                        Sign Out
                    </Button>
                </div>
            ) : (
                <p>No user signed in.</p>
            )}
        </div>
    );
};

export default AuthDetails;
