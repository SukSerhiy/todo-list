import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { Button } from 'element-react';
import{ EditTask as AddTaskModal} from '../../modals'
import { insertTask } from '../../api/Task';

class AddTask extends Component {
    static propTypes = {
        loadData: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
    }

    handleClick = (e) => {
        this.modalRef.current.openModal();
    }

    saveTask = (form) => {
        const { loadData } = this.props;
        insertTask(form)
        .then(() => {
            loadData && loadData();
        })
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
                onClick={this.handleClick} 
            />
            <AddTaskModal 
                ref={ modalRef }
                onSubmit={saveTask}
            />
        </div>)
    }
}

export default AddTask;