import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { authenticate } from '../api/User';
import './style.css'

const Auth = props => {
  const { onLogin } = props;
  const onSubmit = async (email, password) => {
    try {
      const res = await authenticate({ email, password });
      {
        const { username, email } = res;
        onLogin && onLogin({ username, email });
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='auth'>
      <h3>Sign in</h3>
      <div className='auth-form-container'>
        <LoginForm
          className='auth-form'
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

Auth.propTypes = {
  onLogin: PropTypes.func
};

export default Auth;