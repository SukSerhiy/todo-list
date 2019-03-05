import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Task = props => {
  
  const openEditModal = () => {
    const { data, openEditModal } = props;
    openEditModal(data);
  };

  const deleteTask = () => {
    const {
      data: { _id },
      deleteTask
    } = props;

    deleteTask(_id);
  };

  const {
    data: { name, description }
  } = props;

  return (
    <div className='task'>
      <div className='icons'>
        <div className='edit' onClick={openEditModal} />
        <div className='delete' onClick={deleteTask} />
      </div>
      <h4>{name}</h4>
      <span>{description}</span>
    </div>
  );
};

Task.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    userID: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired,
  openEditModal: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;
