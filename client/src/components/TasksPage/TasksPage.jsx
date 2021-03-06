import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TaskModal as EditTaskModal } from '../modals';
import { ADD_TASK } from '../../constants/en';
import './style.css';

class TasksPage extends Component {
  static propTypes = {
    tasks: PropTypes.array,
    addTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  }

  static defaultProps = {
    tasks: []
  };

  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  openEditModal = task => {
    this.modalRef.current.open(task);
  }

  render() {
    const { tasks, addTask, editTask, deleteTask } = this.props;
    return (
      <div className='tasks-page'>
        <div className='control-panel'>
          <AddTask 
            title={ADD_TASK} 
            onSubmit={addTask} 
          />
        </div>
        <div className='task-list'>
          <TaskList 
            tasks={tasks} 
            openEditModal={this.openEditModal} 
            deleteTask={deleteTask} 
          />
        </div>
        <EditTaskModal 
          ref={this.modalRef}
          onSubmit={editTask} />
      </div>
    );
  }
}

export default TasksPage;
