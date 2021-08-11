import axios from 'axios';
import {
  getMoviesFail,
  getMoviesStart,
  getMoviesSuccess,
  createMovieFail,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFail,
  deleteMovieStart,
  deleteMovieSuccess,
} from './MovieActions';

export const getMovies = async (
  dispatch: (params: { type: string }) => void
) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('/movies', {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFail());
  }
};

export const createMovie = async (
  movie: any,
  dispatch: (params: { type: string }) => void
) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post('/movies/', movie, {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFail());
  }
};

export const deleteMovie = async (
  id: number | string,
  dispatch: (params: { type: string }) => void
) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete('/movies/' + id, {
      headers: {
        token:
          'Bearer ' + JSON.parse(localStorage.getItem('user')!).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFail());
  }
};
