import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import TaskContainer from './TaskContainer';
import { EditTask as EditTaskModal } from '../../modals'
import { editTask, deleteTask, completeTask } from '../../api/Task';

import './style.css';

class Task extends Component {
    static propTypes = {
        data: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
        }),
        createdDate: PropTypes.instanceOf(Date),
        modifyDate: PropTypes.instanceOf(Date),
    };

    static defaultProps = {
        data: []
    }

    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
    }

    openEditModal = () => {
        const { modalRef } = this;
        modalRef && modalRef.current && modalRef.current.openModal();
    }

    handleEdit = (task) => {
        const { loadData } = this.props;
        const id = task['_id'];
        delete task['_id'];
        editTask(id, task)
        .then(() => {
            loadData()
        })
        .catch(err => {
            console.error(err);
        });
    }

    handleDelete = (id) => {
        const { loadData } = this.props;
        deleteTask(id)
        .then(() => {
            loadData && loadData();
        })
        .catch(err => {
            console.error(err);
        });
    }

    handleComplete = (id) => {
        const { loadData } = this.props;
        completeTask(id)
        .then(() => {
            loadData && loadData();
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        const { modalRef } = this;
        const { data,
            data: {
            _id, name, description, endDate, completed
        } } = this.props;

        return (
            <TaskContainer 
                taskId={_id}
                completed={completed}
                onEdit={this.openEditModal}
                onDelete={this.handleDelete}
                onComplete={this.handleComplete}
            >
                    <Fragment>
                        <h5 className='task-title'>
                            {name}
                        </h5>

                        <div className='task-description'>
                            {description}
                        </div>

                        <div className='task-date'>
                            {endDate}
                        </div>

                        <EditTaskModal 
                            ref={ modalRef }
                            task={data}
                            onSubmit={this.handleEdit}
                        />
                    </Fragment>
                </TaskContainer>
        )
    }
}

export default Task;