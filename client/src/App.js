import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Header } from './components/Header';
import AuthContainer from './containers/AuthContainer';
import SignUpContainer from './containers/SignUpContainer';
import TaskContainer from './containers/TaskContainer';
import HomePage from './components/HomePage';
import { getCookie } from './utils/cookieHelper'
import { setUser } from './actions/user';
import SAlert from './SAlert';
import './App.css';

const history = createHistory();

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
    return (
      <Fragment>
        <Header
          name='TODO-list'
        />
        <main>
          <Router history={history}>
            <Fragment>
              <Route path='/' exact render={(props) => (<HomePage {...props}  />)} />
              <Route path='/login' exact render={(props) => (<AuthContainer {...props}  />)} />
              {user ? 
                (<Route path='/tasks' exact render={(props) => (<TaskContainer {...props}  />)} />)
              : (<Route path='/tasks' exact render={(props) => (<AuthContainer {...props} />)} />)}
              {!user && (<Route path='/signUp' exact render={(props) => (<SignUpContainer {...props}  />)} />)}
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
