import React from 'react';
import SignForm from '../Shared/SignForm';
import { registrateUser } from '../api/User';
import './style.css'

const SignUp = props => {
    const onSubmit = (email, password) => {
        registrateUser({ email, password })
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

export default SignUp;