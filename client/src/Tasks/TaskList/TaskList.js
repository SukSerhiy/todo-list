import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskList = props => {
    const { data, loadData } = props;
    return (
        <div className='task-list'>
            {data.map((task, idx) => (
                <Task
                    key={idx}
                    data={task}
                    loadData={loadData}
                />
            ))}
        </div>
    )
}

TaskList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        //ID: PropTypes.number.isRequired,
        name: PropTypes.string
    }))
};

TaskList.defaultProps = {
    data: []
};

export default TaskList;