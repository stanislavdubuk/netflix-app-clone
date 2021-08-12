const AuthReducer = (state: any, actions: any) => {
  switch (actions.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: actions.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAIL':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
