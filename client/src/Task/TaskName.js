import React from 'react';

const TaskName = props => {
    const { name } = props;
    return (<div className='task-name'>
        <span>{name}</span>
    </div>)
}

export default TaskName;