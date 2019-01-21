import React, { PureComponent } from 'react';
import 'element-theme-default';
import { Header } from './Header'
import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import Tasks from './Tasks';
import './App.css'
import { Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    onLogin: 'sdfsd'
  },
  {
    path: '/tasks',
    isProtected: true,
    component: Tasks,
  },
  {
    path: '/signUp',
    component: SignUp,
  }
]

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  handleAuthentication = () => {
    this.setState({ isAuthenticated: true });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className='App'>
        <Header />
        {routes.map(({ path, component: C, exact, isProtected, ...rest}, key) => (
          <Route 
            key={key}
            path={path} 
            exact={exact}
            render={(props) => (
              isProtected && !isAuthenticated ? 
              <Auth onLogin={this.handleAuthentication} /> :
              <C {...rest} />
            )} 
          />))
        }
      </div>
    )
  }
}

export default App;
