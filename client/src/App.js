import React, { PureComponent } from 'react';
import 'element-theme-default';
import { Header } from './Header'
import { Content } from './Content'
import { getTasks } from './api/Task';
import './App.css'
import './timepicker.css';
import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import { Route, Link } from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const { tasks } = this.state;
    console.log(this.props);
    return (
      <div className='App'>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/auth' component={Auth} />
        <Route path='/signUp' component={SignUp} />
      </div>
    );
  }
}

export default App;
