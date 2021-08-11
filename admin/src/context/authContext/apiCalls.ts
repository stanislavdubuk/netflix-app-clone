import axios from 'axios';
import { loginFail, loginStart, loginSuccess } from './AuthActions';

export const login = async (user: any, dispatch: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('auth/login', user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
    console.log(err);
  }
};
