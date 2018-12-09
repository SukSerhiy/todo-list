import React, { Component } from 'react';
import 'element-theme-default';
import { Header } from './Header'
import { Content } from './Content'
import getTasks from './api/api.getTasks';
import './App.css'

class App extends Component {
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
      <div className="App">
        <Header />
        <Content 
          tasks={tasks} 
          loadData={this.loadData} 
        />
      </div>
    );
  }
}

export default App;
