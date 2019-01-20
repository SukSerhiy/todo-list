import React from 'react';
import SignForm from '../Shared/SignForm';
import { authenticate } from '../api/User';
import './style.css'

const Auth = props => {
    const { onLogin } = props;
    const onSubmit = (email, password) => {
        authenticate({ email, password })
        .then(res => {
            onLogin && onLogin();
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div className='auth'>
            <div className='auth-form-container'>
                <SignForm
                    onSubmit={ onSubmit }
                />
            </div>
        </div>
    );
}

export default Auth;