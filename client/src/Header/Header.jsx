import React from 'react';
import { Layout } from 'element-react';
import Title from './Title'
import { TODO_LIST } from '../constants/en'
import './style.css';

const Header = props => (
    <Layout.Row className='header'>
        <Layout.Col span='24'>
            <Title name={TODO_LIST} />
        </Layout.Col>
    </Layout.Row>
)

export default Header;