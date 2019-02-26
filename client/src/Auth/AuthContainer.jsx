import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import Auth from './Auth';
import { authenticate } from '../api/User';
import { ErrorAlert } from '../Alerts';
import { setCookie } from '../utils/cookieHelper'

const AuthContainer = props => {
  
  const logIn = async (email, password) => {
    const { setUser } = props;
    try {
      const res = await authenticate({ email, password });
      {
        const { username, email } = res;
        setUser({ username, email });
        setCookie('username', username);
        setCookie('email', email);
      }
    } catch (err) {
      console.error(err);
      ErrorAlert(err.message);
    }
  }
  return (<Auth onSubmit={logIn} />)
}

const mapDispatchToProps = dispatch => ({
  setUser: payload => dispatch(setUser(payload))
});

export default connect(null, mapDispatchToProps)(AuthContainer);