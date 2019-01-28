import React, { PureComponent } from 'react';
import 'element-theme-default';
import { Route } from 'react-router-dom';
import { Header } from './Header'
import Home from './Home';
import Auth from './Auth';
import SignUp from './SignUp';
import Tasks from './Tasks';
import { setCookie, getCookie, deleteCookie } from './utils/cookieHelper'
import './App.css';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/tasks',
    isProtected: true,
    component: Tasks
  }
];

const nonAuthRoutes = [
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
    const username = getCookie('username');
    const email = getCookie('email');
    if (username && email) {
      this.setState({ isAuthenticated: true });
    }
  }

  handleAuthentication = ({ username, email }) => {
    setCookie('username', username);
    setCookie('email', email);
    this.setState({ isAuthenticated: true });
  }

  doLogin() {
    const { protocol, host } = window.location;
    const href = `${protocol}//${host}/login`;
    window.location.href = href;
  }

  doLogout = () => {
    deleteCookie('username');
    deleteCookie('email');
    this.setState({ isAuthenticated: false });
  }

  render() {
    const { isAuthenticated } = this.state;
    const routes = isAuthenticated ? [
      ...publicRoutes
    ] : [
      ...publicRoutes,
      ...nonAuthRoutes
    ];
    return (
      <div className='App'>
        <Header
          doLogin={this.doLogin}
          doLogout={this.doLogout}
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
