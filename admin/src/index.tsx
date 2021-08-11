import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from '../src/context/authContext/AuthContext';
import { MovieContextProvider } from '../src/context/movieContext/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
