import React from 'react';
import SignForm from '../Shared/SignForm';
import { registrateUser } from '../api/User';
import './style.css'

const SignUp = props => {
    const onSubmit = async (email, password) => {
        try {
            const res = await registrateUser({ email, password });
            console.log(res);
            debugger;
        } catch(err) {
            debugger;
        }
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