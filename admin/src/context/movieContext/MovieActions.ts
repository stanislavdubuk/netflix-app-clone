export const getMoviesStart = () => ({
  type: 'GET_MOVIES_START',
});
export const getMoviesSuccess = (movies: any) => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
});
export const getMoviesFail = () => ({
  type: 'GET_MOVIES_FAIL',
});

export const createMovieStart = () => ({
  type: 'CREATE_MOVIE_START',
});
export const createMovieSuccess = (movie: any) => ({
  type: 'CREATE_MOVIE_SUCCESS',
  payload: movie,
});
export const createMovieFail = () => ({
  type: 'CREATE_MOVIE_FAIL',
});

export const updateMovieStart = () => ({
  type: 'UPDATE_MOVIE_START',
});
export const updateMovieSuccess = (movie: any) => ({
  type: 'UPDATE_MOVIE_SUCCESS',
  payload: movie,
});
export const updateMovieFail = () => ({
  type: 'UPDATE_MOVIE_FAIL',
});

export const deleteMovieStart = () => ({
  type: 'DELETE_MOVIE_START',
});
export const deleteMovieSuccess = (id: number | string) => ({
  type: 'DELETE_MOVIE_SUCCESS',
  payload: id,
});
export const deleteMovieFail = () => ({
  type: 'DELETE_MOVIE_FAIL',
});
