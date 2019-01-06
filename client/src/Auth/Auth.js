import React from 'react';
import SignForm from '../Shared/SignForm';
import { authenticate } from '../api/User';
import './style.css'

const Auth = props => {
    const onSubmit = (email, password) => {
        authenticate(email, password)
        .then(res => {
            debugger;
        })
        .catch(err => {
            debugger;
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