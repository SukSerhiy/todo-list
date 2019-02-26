import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { authenticate } from '../api/User';
import { ErrorAlert } from '../Alerts';
import './style.css'

const Auth = props => {

  const { onSubmit } = props;

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
  onSubmit: PropTypes.func
};

export default Auth;