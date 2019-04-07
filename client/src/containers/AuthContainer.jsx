import React from 'react';
import { withRouter } from 'react-router-dom';
import withSetUser from './withSetUser';
import AuthPage from '../components/AuthPage';
import { authenticate } from '../api/User';
import { ErrorAlert } from '../Alerts';

const AuthContainer =  props => {
  console.log('props', props);
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

export default withRouter(withSetUser(AuthContainer));