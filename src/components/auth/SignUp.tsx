// src/components/auth/SignUp.tsx
import React, { useState, CSSProperties, ChangeEvent, FormEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword, Auth, UserCredential } from 'firebase/auth'; // Updated import
import { auth } from '../../firebase'; // Adjust the import path based on your file structure

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User successfully signed up!', user);
        } catch (error: any) {
            console.error('Error signing up:', error.message);
        }
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2em',
    };

    const formStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const textFieldStyle: CSSProperties = {
        margin: '1em',
        width: '300px',
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h1>Create an account</h1>
                <TextField
                    style={textFieldStyle}
                    type="email"
                    label="Enter your email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    style={textFieldStyle}
                    type="password"
                    label="Enter your password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
