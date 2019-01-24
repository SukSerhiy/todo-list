import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls'

const TaskContainer = props => {
    const { 
        children, 
        taskId, 
        completed, 
        onEdit, 
        onDelete, 
        onComplete 
    } = props;
        
    return (
        <div 
            className='task-container'
            onDoubleClick={() => onEdit(taskId)}
        >
            <div className='content'>
                {children}
            </div>
            <Controls 
                id={taskId}
                onEdit={onEdit}
                onDelete={onDelete}
                onComplete={onComplete}
                completed={completed}
            />
        </div>)
}

TaskContainer.propTypes = {
    children: PropTypes.node,
    taskId: PropTypes.string,
    completed: PropTypes.bool,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onComplete: PropTypes.func
};

export default TaskContainer;