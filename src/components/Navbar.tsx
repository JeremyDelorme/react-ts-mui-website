// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Snackbar,
} from '@mui/material';
import {
    onAuthStateChanged,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import AuthDetails from './auth/AuthDetails';

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
const auth = getAuth(firebaseApp);

const styles: Record<string, React.CSSProperties> = {
    appBar: {
        backgroundColor: 'your-color-here', // replace with your color
    },
    title: {
        flexGrow: 1,
    },
};

interface NavbarProps {
    // Add any additional props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
    const [user, setUser] = useState<User | null>(null);
    const [signInDialogOpen, setSignInDialogOpen] = useState(false);
    const [signUpDialogOpen, setSignUpDialogOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setConfirmationMessage('Successfully signed out.');
        } catch (error: any) {
            setErrorMessage('Error signing out: ' + (error as Error).message);
        }
    };

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSignInDialogOpen(false);
            setEmail('');
            setPassword('');
            setConfirmationMessage('Successfully signed in.');
        } catch (error: any) {
            setErrorMessage('Error signing in: ' + (error as Error).message);
        }
    };

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSignUpDialogOpen(false);
            setEmail('');
            setPassword('');
            setConfirmationMessage('Successfully signed up.');
        } catch (error: any) {
            setErrorMessage('Error signing up: ' + (error as Error).message);
        }
    };

    const handleSnackbarClose = () => {
        setConfirmationMessage(null);
        setErrorMessage(null);
    };

    return (
        <>
            <AppBar position="static" style={styles.appBar}>
                <Toolbar>
                    <Typography variant="h6" style={styles.title}>
                        My Movie App
                    </Typography>
                    {user ? (
                        <AuthDetails user={user} onSignOut={handleSignOut} />
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => setSignInDialogOpen(true)}>
                                Sign In
                            </Button>
                            <Button color="inherit" onClick={() => setSignUpDialogOpen(true)}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>

            {/* Sign In Dialog */}
            <Dialog open={signInDialogOpen} onClose={() => setSignInDialogOpen(false)}>
                <DialogTitle>Sign In</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSignInDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleSignIn}>Sign In</Button>
                </DialogActions>
            </Dialog>

            {/* Sign Up Dialog */}
            <Dialog open={signUpDialogOpen} onClose={() => setSignUpDialogOpen(false)}>
                <DialogTitle>Sign Up</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSignUpDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handleSignUp}>Sign Up</Button>
                </DialogActions>
            </Dialog>

            {/* Confirmation and Error Snackbar */}
            <Snackbar
                open={!!confirmationMessage || !!errorMessage}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={confirmationMessage || errorMessage || ''}
            />
        </>
    );
};

export default Navbar;
