// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import HomePage from './pages/HomePage';

import './index.css'; // Import your global CSS file


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
