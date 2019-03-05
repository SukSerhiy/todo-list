import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { setCookie } from '../utils/cookieHelper';

const withSetUser = WrappedComponent => {
  const WithSetUserHOC = props => {
    const setUser = user => {
      const { setUser } = props;
      setUser(user);
      setCookie('username', user.username);
      setCookie('email', user.email);
    }

    return (<WrappedComponent setUser={setUser} />);
  }

  const mapDispatchToProps = dispatch => ({
    setUser: payload => dispatch(setUser(payload)),
  });

  return connect(null, mapDispatchToProps)(WithSetUserHOC)
}

export default withSetUser;
