import React from 'react'
import TaskList from '../TaskList'
import AddTask from '../Task/AddTask'

import './style.css'

const Tasks = props => {
    const { tasks, loadData } = props;
    return (<div className='content'>
        <AddTask 
            title='Add Task' 
            loadData={loadData} 
        />
        <TaskList 
            data={tasks} 
            loadData={loadData} 
        />
    </div>)
}

export default Content;