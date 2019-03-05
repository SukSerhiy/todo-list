import React from 'react';
import PropTypes from 'prop-types';
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
    </div>
  </div>)
}

AuthPage.propTypes = {
  doLogIn: PropTypes.func.isRequired
};

export default AuthPage;