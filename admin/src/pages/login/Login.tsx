import React, { useContext } from 'react';
import { useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isFetching, dispatch } = useContext<any>(AuthContext);

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <form className='loginForm'>
        <input
          type='text'
          placeholder='email'
          className='loginInput'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          className='loginInput'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='loginButton'
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
        {error && (
          <p className='loginErrorMessage'>
            Incorrect username or password! <br /> Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
