import React from 'react';
import Title from './Title'
import UserInfo from './UserInfo';
import { Layout } from 'element-react';
import './style.css';

const Header = props => {
  const { name } = props;
  return (
    <header>
      <h2 className='title'>{name}</h2>
    </header>
  )
}

export default Header;