const MovieReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case 'GET_MOVIES_SUCCESS':
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case 'GET_MOVIES_FAIL':
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case 'CREATE_MOVIE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_MOVIE_SUCCESS':
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_MOVIE_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'UPLOAD_MOVIE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'UPLOAD_MOVIE_SUCCESS':
      return {
        movies: state.movies.map(
          (movie: any) =>
            movie._id === action.payload._id &&
            action.payload._id &&
            action.payload
        ),
        isFetching: false,
        error: false,
      };
    case 'UPLOAD_MOVIE_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'DELETE_MOVIE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_MOVIE_SUCCESS':
      return {
        movies: state.movies.filter(
          (movie: any) => movie._id !== action.payload
        ),
        isFetching: false,
        error: false,
      };
    case 'DELETE_MOVIE_FAIL':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MovieReducer;
