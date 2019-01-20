import React, { Component } from 'react';
import { Button } from 'element-react';
import{ EditTask as AddTaskModal} from '../../modals'
import { insertTask } from '../../api/Task';

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
        } = this;
        return (<div>
            <Button 
                className='add-task-button'
                icon='plus' 
                onClick={this.handleClick.bind(this)} 
            />
            <AddTaskModal 
                ref={ modalRef }
                submit={saveTask}
            />
        </div>)
    }
}

export default AddTask;