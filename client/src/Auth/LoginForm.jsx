import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Loading } from 'element-react';
import { FIELD_IS_REQUIRED, ENTER_VALID_EMAIL } from '../constants/en';

class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  state = {
    form: {
      email: null,
      password: null
    },
    rules: {
      email: [
        { required: true, message: FIELD_IS_REQUIRED, trigger: 'blur' },
        { type: 'email', message: ENTER_VALID_EMAIL, trigger: 'blur' }
      ],
      password: [
        { required: true, message: FIELD_IS_REQUIRED, trigger: 'blur' }
      ],
    },
    isLoading: false
  };

  onFieldChange(field, value) {
    const { form } = this.state;
    form[field] = value;
    this.setState({ form });
  }

  render() {
    const {
      form,
      form: {
        email,
        password
      },
      rules,
      isLoading
    } = this.state;
    const { onSubmit, className } = this.props;

    return (<Fragment>
      {isLoading ? <Loading /> : <Form
        className={className}
        model={form}
        rules={rules}
      >
        <Form.Item
          prop='email'
        >
          <Input
            placeholder='Enter your email'
            value={email}
            onChange={v => this.onFieldChange('email', v)}
          />
        </Form.Item>

        <Form.Item
          prop='password'
        >
          <Input
            placeholder='Enter the password'
            value={password}
            onChange={v => this.onFieldChange('password', v)}
            type='password'
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

export default LoginForm; 