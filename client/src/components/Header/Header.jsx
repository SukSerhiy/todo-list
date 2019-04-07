import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'element-react';
import './style.css';

const Header = props => {

  const { username, signIn, signOut } = props;
  return (
    <header>
      <h2 className='title'>TODO-list</h2>
      {username ? (<Button onClick={signOut}>Sign out</Button>) : (<Button onClick={signIn}>Sign in</Button>)}
    </header>
  );
}

Header.propTypes = {
  username: PropTypes.string,
  signIn: PropTypes.func,
  signOut: PropTypes.func
};

export default Header;