import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  const emailRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);
  const usernameRef = useRef<HTMLInputElement>(null!);

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e: any) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post('auth/register', { email, username, password });
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <div>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
              alt='logo'
              className='logo'
            />
          </div>
        </div>
      </div>
      <div className='container'>
        <Link to='/login' className='link'>
          <button className='loginButton'>Sign In</button>
        </Link>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='Enter email' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input
              type='username'
              placeholder='Enter username'
              ref={usernameRef}
            />
            <input
              type='password'
              placeholder='Enter password'
              ref={passwordRef}
            />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
