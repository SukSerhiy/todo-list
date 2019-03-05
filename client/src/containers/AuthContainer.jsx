import React from 'react';
import withSetUser from './withSetUser';
import AuthPage from '../components/AuthPage';
import { authenticate } from '../api/User';
import { ErrorAlert } from '../Alerts';

const AuthContainer =  props => {
  const logIn = async (email, password) => {
    const { setUser } = props;
    try {
      const res = await authenticate({ email, password });
      {
        const { username, email } = res;
        setUser({ username, email });
      }
    } catch (err) {
      console.error(err);
      ErrorAlert(err.message);
    }
  }

  return (<AuthPage doLogIn={logIn} />);
}

export default withSetUser(AuthContainer);