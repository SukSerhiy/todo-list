import React, { Component } from 'react';
import { Button } from 'element-react';
import { AddTask as AddTaskModal } from '../modals/AddTask'
import insertTask from '../api/api.insertTask';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
        this.saveTask = this.saveTask.bind(this);
    }

    handleClick (e) {
        const { modalRef } = this;
        modalRef && modalRef.current && modalRef.current.openModal();
    }

    saveTask (form) {
        const { loadData } = this.props;
        insertTask(form)
        .then(() => loadData())
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        const { 
            saveTask, 
            modalRef, 
            props: { title } 
        } = this;
        return (<div>
            <Button onClick={this.handleClick.bind(this)}>
                {title}
            </Button>
            <AddTaskModal 
                ref={ modalRef }
                submit={saveTask}
            />
        </div>)
    }
}

export default AddTask;