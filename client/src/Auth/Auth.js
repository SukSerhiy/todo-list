import React from 'react';
import AuthForm from './AuthForm'
import './style.css'

const Auth = props => (
    <div className='auth'>
        <div className='auth-form-container'>
            <AuthForm />
        </div>
    </div>
)

export default Auth;