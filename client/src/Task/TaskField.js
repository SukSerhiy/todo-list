import React from 'react';

const TaskField = props => {
    const { name, value } = props;
    return (<div className='task-record'>
        <span>{`${name}: `}</span>
        <span>{value}</span>
    </div>)
}

export default TaskField;