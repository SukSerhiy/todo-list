import React, { PureComponent, Fragment } from 'react';
import 'element-theme-default';
import { Header } from './Header'
import './App.css'
import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import { Route } from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    return (
      <Fragment>
        <Header name='TODO-List' />
        <main>
          <Route path='/' exact component={Home} />
          <Route path='/auth' component={Auth} />
          <Route path='/signUp' component={SignUp} />
        </main>
      </Fragment>
    );
  }
}

export default App;
