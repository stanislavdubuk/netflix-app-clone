// LOGIN
export const loginStart = () => ({
  type: 'LOGIN_START',
});
export const loginSuccess = (user: any) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFail = () => ({
  type: 'LOGIN_FAIL',
});

// LOGOUT
export const logout = () => ({
  type: 'LOGOUT',
});
