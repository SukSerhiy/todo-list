import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = props => {
  const { tasks, openEditModal, deleteTask } = props;
  return (
    <Fragment>
      {tasks.map((task, idx) => (
        <Task 
          key={idx} 
          data={task} 
          openEditModal={openEditModal} 
          deleteTask={deleteTask} 
        />
      ))}
    </Fragment>
  )
}

TaskList.defaultProps = {
  tasks: []
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  openEditModal: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskList;