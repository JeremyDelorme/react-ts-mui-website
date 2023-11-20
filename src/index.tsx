// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Josefin Slab, sans-serif',
    fontWeightBold: '100%'
  },
  palette: {
    primary: {
      main: '#FF4081', // Your primary color
    },
    secondary: {
      main: '#000000', // Your secondary color
    },
  },
  // Add other customizations as needed
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
