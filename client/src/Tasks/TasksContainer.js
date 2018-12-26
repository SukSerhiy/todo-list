import React, { PureComponent } from 'react';
import { getTasks } from '../api/Task';
import Tasks from './Tasks';

class TasksContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
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
