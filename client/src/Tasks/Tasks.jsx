import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from './AddTask';
import Task from './Task';
import { TaskModal as EditTaskModal } from '../modals';
import { getTasks, editTask, deleteTask } from '../api/Task';
import { ADD_TASK } from '../constants/en';
import { setTasks } from '../actions/tasks';
import './style.css';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    const { setTasks } = this.props;
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (err) {
      console.error(err);
    }
  }

  openEditModal = task => {
    this.modalRef.current.open(task);
  }

  editTask = async (modifiedTask) => {
    const { tasks, modifiedTask: { _id } } = this.props;
    const task = tasks.find(t => t['_id'] === modifiedTask['_id']);
    const modifiedFields = Object.keys(task).reduce((acc, key) => {
      if (modifiedTask[key] !== task[key]) {
        return { ...acc, key: modifiedTask[key] };
      } else {
        return acc;
      }
    }, {});

    if (Object.keys(modifiedFields).length > 0) {
      try {
        await editTask(_id, modifiedFields);
        this.loadTasks();
      } catch(err) {
        console.error(err);
      }
    }

    console.log(modifiedFields);
  }

  deleteTask = _id => {}

  addTask = task => {}

  render() {
    const { tasks } = this.props;
    return (
      <div className='tasks-page'>
        <div className='control-panel'>
          <AddTask 
            title={ADD_TASK} 
            loadData={this.loadTasks} 
            onSubmit={this.addTask}
          />
        </div>
        <div className='task-list'>
          {tasks.map((task, idx) => (
            <Task 
              key={idx} 
              data={task} 
              openEditModal={this.openEditModal}
              deleteTask={this.deleteTask}
            />
          ))}
        </div>
        <EditTaskModal 
          ref={this.modalRef}
          onSubmit={this.editTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { tasks } = state.toJS();
  return { tasks };
}

const mapDispatchToProps = dispatch => ({
  setTasks: payload => dispatch(setTasks(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
