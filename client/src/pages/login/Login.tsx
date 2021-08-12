import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';

import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext<any>(AuthContext);

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='logo'
            className='logo'
          />
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input
            type='email'
            placeholder='Email or phone number'
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <button className='loginButton' onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?
            <Link to='/register'>
              <b> Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
