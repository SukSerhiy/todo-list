import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';
import Modal from 'react-responsive-modal';
import ValidationFailedError from '../Errors/ValidationFailed'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formFields = {
    _id: null,
    name: '',
    description: '',
    endDate: new Date(),
    createDate: new Date(),
    modifyDate: new Date(),
}

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
}

class EditTask extends Component {
    constructor(props) {
        super(props);
        const { task } = props;
        this.state = {
            startDate: new Date(),
            open: false,
            form: Object.assign({}, formFields, task),
            rules: {
                name: [
                    { required: true, message: 'Please input task name', trigger: 'blur' }
                ]
            },
        }
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal (form) {
        const { task } = this.props;
        this.setState({ 
            open: true, 
            form: Object.assign({}, formFields, task) 
        });
    }
    
    handleClose (e) {
        this.setState({ 
            open: false, 
            form: Object.assign({}, formFields) 
        });
    }

    handleSubmit (e) {
        const { submit } = this.props;
        this.validateForm()
            .then(() => {
                submit && submit(Object.assign({}, this.state.form));
                this.handleClose();
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    validateForm () {
        const self = this;
        return new Promise((resolve, reject) => {
            self.formRef.current.validate(valid => {
                if (valid) {
                    resolve();
                } else {
                    reject(new ValidationFailedError());
                }
            })
        })
    }

    onFieldChange(field, value) {
        const form = this.state.form;
        form[field] = value;
        this.setState({ form });
    }

    render() {
        const {
            open, 
            form,
            form: {
                name,
                description,
                endDate,
            },
            rules,
        } = this.state;

        return (
            <Modal
                open={open}
                styles={styles}
                onClose={this.handleClose.bind(this)}
                center
            >
                <Form 
                    ref={this.formRef}
                    model={form}
                    rules={rules}
                >
                    <Form.Item 
                        prop='name'
                    >
                        <Input 
                            placeholder='Task name'
                            value={name}
                            onChange={v => this.onFieldChange('name', v)}
                        />
                    </Form.Item>

                    <Form.Item 
                        prop='description'
                    >
                        <Input 
                            type='textarea'
                            autosize={{ minRows: 10}}
                            placeholder='Description'
                            value={description}
                            onChange={v => this.onFieldChange('description', v)}
                        />
                    </Form.Item>

                    <Form.Item 
                        prop='description'
                    >
                        <DatePicker
                            selected={endDate}
                            onChange={v => this.onFieldChange('endDate', v)}
                            showTimeSelect
                        />
                    </Form.Item>
                </Form>

                <Button onClick={this.handleSubmit}>Save</Button>
            </Modal>
        )
    }
}

export default EditTask;
