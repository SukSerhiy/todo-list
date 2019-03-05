import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Header } from './Header'
import Home from './Home';
import AuthContainer from './Auth';
import SignUp from './SignUp';
import TaskContainer from './Tasks';
import { getCookie } from './utils/cookieHelper'
import { setUser } from './actions/user';
import SAlert from './SAlert';
import './App.css';

const history = createHistory();

const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/tasks',
    isProtected: true,
    component: TaskContainer
  }
];

const nonAuthRoutes = [
  {
    path: '/login',
    component: AuthContainer,
  },
  {
    path: '/signUp',
    component: SignUp,
  }
];

class App extends PureComponent {
  componentDidMount() {
    const { setUser } = this.props;
    const username = getCookie('username');
    const email = getCookie('email');
    if (username && email) {
      setUser({ username, email });
    }
  }

  render() {
    const { user } = this.props;
    const routes = this.props.user ? [
      ...publicRoutes
    ] : [
      ...publicRoutes,
      ...nonAuthRoutes
    ];
    return (
      <Fragment>
        <Header
          name='TODO-list'
        />
        <main>
          <Router history={history}>
            <Fragment>
              {routes.map(({ path, component: C, exact, isProtected, ...rest}, key) => (
                <Route 
                  key={key}
                  path={path} 
                  exact={exact}
                  render={(props) => (
                    isProtected && !user ? 
                    (<AuthContainer 
                      {...props} 
                    {...rest} />) :
                    (<C 
                      {...props} 
                      {...rest} 
                    />)
                  )} 
                />))}
              </Fragment>
          </Router>
        </main>
        <SAlert />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.toJS();
  return { user };
};

const mapDispatchToProps = dispatch => ({
  setUser: payload => dispatch(setUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
