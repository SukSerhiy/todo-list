import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Loading } from 'element-react';
import { authenticate } from '../api/User';

class SignForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: null,
                password: null
            },
            isLoading: false
        };
    }

    onFieldChange(field, value) {
        const form = this.state.form;
        form[field] = value;
        this.setState({ form });
    }

    handleSubmit() {

    }

    render() {
        const { 
            form,
            form: {
                email,
                password
            },
            isLoading
         } = this.state;
        const { onSubmit } = this.props;


        return (<Fragment>
            {isLoading ? <Loading /> : <Form 
                className='auth-form'
                form={form}
            >
                <Form.Item>
                    <Input 
                        placeholder='Enter your email'
                        value={email}
                        onChange={v => this.onFieldChange('email', v)}
                    />
                </Form.Item>

                <Form.Item>
                    <Input 
                        placeholder='Enter the password'
                        value={password}
                        onChange={v => this.onFieldChange('password', v)}
                    />
                </Form.Item>

                <Button onClick={() => onSubmit(email, password)}>
                    Sign in
                </Button>
            </Form>}
        </Fragment>
        )
    }
}

export default SignForm; 