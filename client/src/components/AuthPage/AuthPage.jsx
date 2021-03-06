import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import './style.css';

const AuthPage = props => {
  const { doLogIn } = props;
  return (
    <div className='auth'>
      <h3>Sign in</h3>
      <div className='auth-form-container'>
        <LoginForm
          className='auth-form'
          onSubmit={doLogIn}
        />
        <div className='sign-up-note'>
        <span>Have no account yet?</span><Link to='/signUp'>Sign Up</Link>
        </div>
      </div>
  </div>)
}

AuthPage.propTypes = {
  doLogIn: PropTypes.func.isRequired
};

export default AuthPage;