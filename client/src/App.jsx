import React, { PureComponent } from 'react';
import 'element-theme-default';
import { Route } from 'react-router-dom';
import { Header } from './Header'
import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import Tasks from './Tasks';
import './App.css';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/tasks',
    isProtected: true,
    component: Tasks
  },
  {
    path: '/login',
    component: Auth,
    onLogin: this.handleAuthentication
  },
  {
    path: '/signUp',
    component: SignUp,
    onSignUp: this.handleAuthentication
  }
]

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    if (document.cookie.username && document.cookie.email) {
      this.setState({ isAuthenticated: true });
    }
  }

  handleAuthentication = ({ username, email }) => {
    document.cookie=`username=${username}`;
    document.cookie=`email=${email}`;
    this.setState({ isAuthenticated: true });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className='App'>
        <Header
          isAuthenticated={isAuthenticated} 
        />
        {routes.map(({ path, component: C, exact, isProtected, ...rest}, key) => (
          <Route 
            key={key}
            path={path} 
            exact={exact}
            render={(props) => (
              isProtected && !isAuthenticated ? 
              <Auth 
                onLogin={this.handleAuthentication} 
                {...props} 
                {...rest} /> :
              <C 
                {...props} 
                {...rest} 
              />
            )} 
          />))
        }
      </div>
    );
  }
}

export default App;
