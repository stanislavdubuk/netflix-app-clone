import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthContextProvider } from '../src/context/authContext/AuthContext';
import { MovieContextProvider } from '../src/context/movieContext/MovieContext';
import { ListContextProvider } from '../src/context/listContext/ListContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <App />
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
