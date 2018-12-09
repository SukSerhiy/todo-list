import React, { Component } from 'react';
import Controls from './Controls'

class TaskContainer extends Component {
    
    render() {
        const { children, ID, onEdit, onDelete, onChangeStatus } = this.props;
        return (
        <div className='task-container'>
            <div className='content'>
                {children}
            </div>
            <Controls 
                ID={ID} 
                onEdit={onEdit}
                onDelete={onDelete}
                onChangeStatus={onChangeStatus}
            />
        </div>)
    }
}

export default TaskContainer;