import React from 'react';
import Title from './Title'
import UserInfo from './UserInfo';
import { Layout } from 'element-react';
import { TODO_LIST } from '../constants/en'
import './style.css';

const Header = props => {
    const { isAuthenticated } = props;
    return (
        <Layout.Row className='header'>
            <Layout.Col span='20'>
                <Title name={TODO_LIST} />
            </Layout.Col>
            <Layout.Col span='4'>
                <UserInfo isAuthenticated={isAuthenticated} />
            </Layout.Col>
        </Layout.Row>
    )
}

export default Header;