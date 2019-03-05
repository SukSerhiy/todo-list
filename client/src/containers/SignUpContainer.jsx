import React from 'react';
import withSetUser from './withSetUser';
import SignUpPage from '../components/SignUp';
import { registrateUser } from '../api/User';
import { ErrorAlert } from '../Alerts';

const SignUpContainer = props => {
  const doSignUp = async ({ username, email, password }) => {
    try {
      const res = await registrateUser({ username, email, password });
      if (res.success) {
        const { setUser } = props;
        setUser({username, email});
        const { history } = props;
        history.push('/');
      }
    } catch (err) {
      console.error(err);
      ErrorAlert(err.message);
    }
  };

  return (<SignUpPage doSignUp={doSignUp} />);
};

export default withSetUser(SignUpContainer);
