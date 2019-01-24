import React, { PureComponent } from 'react';
import { getTasks } from '../api/Task';
import Tasks from './Tasks';

class TasksContainer extends PureComponent {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    getTasks()
      .then(tasks => {
        this.setState({ tasks })
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { tasks } = this.state;
    return (
        <Tasks 
            tasks={tasks} 
            loadData={this.loadData} 
        />
    );
  }
}

export default App;
