import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Loading } from 'element-react';

class SignUpForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }
    
    state = {
        form: {
            username: null,
            email: null,
            password: null,
            confirmedPassword: null
        },
        rules: {
            username: [
                {
                    required: true,
                    message: 'Username is required'
                }
            ],
            email: [
                {
                    required: true,
                    message: 'Email is required'
                },
                {
                    type: 'email', 
                    message: 'Please input correct email address', 
                    trigger: 'blur'
                }
            ],
            password: [
                {
                    required: true,
                    message: 'Password is required'
                }
            ],
            confirmedPassword: [
                {
                    validator: (rule, value, callback) => {
                        const { password } = this.state.form;
                        if (value === password) {
                            callback();
                        } else {
                            callback(new Error('Passwords don\'t match'));
                        }
                    }
                }
            ]
        },
        isLoading: false
    };

    onFieldChange(field, value) {
        const { form } = this.state;
        form[field] = value;
        this.setState({ form });
    }

    validate = async () => {
        const form = this.formRef.current;
        await new Promise((resolve, reject) => {
            form.validate(valid => {
                if (valid) {
                    resolve();
                } else {
                    reject();
                }
            })
        });
    }

    onSubmit = () => {
        const { onSubmit } = this.props;
        const { form: {
            username, email, password
        } } = this.state;
        try {
            this.validate() 
            onSubmit({ username, email, password })
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        const { 
            form,
            form: {
                username,
                email,
                password,
                confirmedPassword
            },
            rules,
            isLoading,
         } = this.state;

        return (<Fragment>
            {isLoading ? <Loading /> : <Form 
                ref={this.formRef}
                className='auth-form'
                model={form}
                rules={rules}
            >
                <Form.Item prop='username'>
                    <Input 
                        placeholder='Enter username'
                        value={username}
                        onChange={v => this.onFieldChange('username', v)}
                    />
                </Form.Item>
                <Form.Item prop='email'>
                    <Input 
                        placeholder='Enter your email'
                        value={email}
                        onChange={v => this.onFieldChange('email', v)}
                    />
                </Form.Item>
                <Form.Item prop='password'>
                    <Input 
                        placeholder='Enter your password'
                        value={password}
                        type='password'
                        onChange={v => this.onFieldChange('password', v)}
                    />
                </Form.Item>
                <Form.Item prop='confirmedPassword'>
                    <Input 
                        placeholder='Confirm the password'
                        value={confirmedPassword}
                        type='password'
                        onChange={v => this.onFieldChange('confirmedPassword', v)}
                    />
                </Form.Item>

                <Button onClick={this.onSubmit}>
                    Sign in
                </Button>
            </Form>}
        </Fragment>
        )
    }
}

export default SignUpForm; 