import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'element-react';
import Modal from 'react-responsive-modal';
import ValidationFailedError from '../Errors/ValidationFailed';

const formFields = {
  _id: null,
  name: '',
  description: ''
};

const styles = {
  modal: {
    width: '50%',
    padding: '1.6rem',
    borderRadius: '10px'
  },
  closeButton: {
    cursor: 'pointer',
    top: '2px',
    right: '2px'
  }
};

class TaskModal extends Component {
  static propTypes = {
    task: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      description: PropTypes.string,
      userID: PropTypes.string,
      completed: PropTypes.bool
    }),
    loadData: PropTypes.func,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      open: false,
      form: { ...formFields },
      rules: {}
    };
    this.formRef = React.createRef();
  }

  open(task) {
    const data = task || {};
    this.setState({
      open: true,
      form: { ...formFields, ...data }
    });
  }

  handleClose = e => {
    this.setState({
      open: false,
      form: { ...formFields }
    });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { form } = this.state;
    this.validateForm()
      .then(() => {
        onSubmit && onSubmit(form);
        this.handleClose();
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  validateForm() {
    const self = this;
    return new Promise((resolve, reject) => {
      self.formRef.current.validate(valid => {
        if (valid) {
          resolve();
        } else {
          reject(new ValidationFailedError());
        }
      });
    });
  }

  onFieldChange(field, value) {
    const { form } = this.state;
    form[field] = value;
    this.setState({ form });
  }

  render() {
    const {
      open,
      form,
      form: { name, description },
      rules
    } = this.state;

    return (
      <Modal open={open} styles={styles} onClose={this.handleClose} center>
        <Form ref={this.formRef} model={form} rules={rules}>
          <Form.Item prop='name'>
            <Input
              placeholder='Task name'
              value={name}
              onChange={v => this.onFieldChange('name', v)}
            />
          </Form.Item>

          <Form.Item prop='description'>
            <Input
              type='textarea'
              autosize={{ minRows: 10 }}
              placeholder='Description'
              value={description}
              onChange={v => this.onFieldChange('description', v)}
            />
          </Form.Item>
        </Form>

        <Button onClick={this.handleSubmit}>Save</Button>
      </Modal>
    );
  }
}

export default TaskModal;
