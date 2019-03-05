import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TasksPage from '../components/TasksPage';
import { insertTask, getTasks, editTask, deleteTask } from '../api/Task';
import { setTasks } from '../actions/tasks';

class TaskContainer extends PureComponent {
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

  editTask = async (modifiedTask) => {
    const { tasks } = this.props;
    const { _id } = modifiedTask;
    const task = tasks.find(t => t['_id'] === modifiedTask['_id']);
    const modifiedFields = Object.keys(task).reduce((acc, key) => {
      if (modifiedTask[key] !== task[key]) {
        return { ...acc, [key]: modifiedTask[key] };
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
  }

  deleteTask = async (id) => {
    try {
      await deleteTask(id);
      this.loadTasks();
    } catch(err) {
      console.error(err);
    }
  }

  addTask = async (task) => {
    try {
      await insertTask(task);
      this.loadTasks();
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    const { tasks } = this.props;
    return (
      <TasksPage 
        tasks={tasks}
        addTask={this.addTask}
        editTask={this.editTask}
        deleteTask={this.deleteTask}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
