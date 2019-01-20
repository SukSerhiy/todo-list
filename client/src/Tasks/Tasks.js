import React, { Component } from 'react'
import TaskList from './TaskList'
import AddTask from './Task/AddTask'
import { getTasks } from '../api/Task';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        getTasks()
            .then(data => {
                this.setState({tasks: data});
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { tasks } = this.state;
        return (<div className='content'>
            <AddTask 
                title='Add Task' 
                loadData={this.loadData} 
            />
            <TaskList 
                data={tasks} 
                loadData={this.loadData} 
            />
        </div>)
    }
}

export default Tasks;