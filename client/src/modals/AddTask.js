import React, { Component } from 'react';
import { Form, Input, Button, DatePicker, TimePicker } from 'element-react';
import Modal from 'react-responsive-modal';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            form: {
                name: '',
                date: new Date(),
                time: null,
                createDate: new Date(),
                modifyDate: new Date(),
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal (e) {
        this.setState({ open: true });
    }
    
    handleClose (e) {
        this.setState({ open: false });
    }

    handleSubmit (e) {
        const { submit } = this.props;
        submit && submit(this.state.form);
        this.handleClose();
    }

    onFieldChange(field, value) {
        const form = this.state.form;
        form[field] = value;
        this.setState({form});
    }

    render() {
        const {
            open, 
            form: {
                name,
                date,
                time
            }
        } = this.state;
        return (
            <Modal
                open={open}
                onClose={this.handleClose.bind(this)}
                styles={{
                    closeButton: {
                        cursor: 'pointer'
                    }
                }}
                center
            >
                <h3>Add Task</h3>

                <Form model={this.state.form}>
                    <Form.Item prop='name'>
                        <Input 
                            icon="time"
                            type="textarea"
                            autosize={{ minRows: 10}}
                            placeholder='Enter task...'
                            value={name}
                            onChange={v => this.onFieldChange('name', v)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <DatePicker
                            value={date}
                            onChange={v => this.onFieldChange('date', v)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <TimePicker
                            selectableRange='18:30:00 - 20:30:00'
                            value={time}
                            onChange={v => this.onFieldChange('time', v)}
                        />
                    </Form.Item>
                </Form>

                <Button onClick={this.handleSubmit}>Save</Button>
            </Modal>
        )
    }
}

export { AddTask };
