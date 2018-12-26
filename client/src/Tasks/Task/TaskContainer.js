import React, { Component } from 'react';
import Controls from './Controls'

class TaskContainer extends Component {
    
    render() {
        const { children, taskId, completed, onEdit, onDelete, onComplete } = this.props;
        
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
}

export default TaskContainer;