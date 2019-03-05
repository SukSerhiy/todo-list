import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from './SignUpForm';
import './style.css';

const SignUpPage = props => {
  const { doSignUp } = props;
  return (
    <div className='auth'>
      <div className='auth-form-container'>
        <SignUpForm onSubmit={doSignUp} />
      </div>
    </div>
  );
};

SignUpPage.propTypes = {
  doSignUp: PropTypes.func.isRequired
};

export default SignUpPage;
