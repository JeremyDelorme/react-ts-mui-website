// src/components/auth/AuthWrapper.tsx
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the import path based on your file structure
import AuthDetails from './AuthDetails';

interface AuthWrapperProps {
    children: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    // Redirect to login if user is not authenticated
    if (!user) {
        return <div>You are not authenticated. Please <a href="/signin">sign in</a>.</div>;
    }

    return (
        <div>
            <AuthDetails user={user} onSignOut={handleSignOut} />
            {children}
        </div>
    );
};

export default AuthWrapper;
