import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthContainer from './containers/AuthContainer';
import SignUpContainer from './containers/SignUpContainer';
import TaskContainer from './containers/TaskContainer';
import HomePage from './components/HomePage';
import { getCookie, deleteCookie } from './utils/cookieHelper';
import { setUser, unsetUser } from './actions/user';
import SAlert from './SAlert';
import './App.css';

const footerInfo = {
  contactInfo: {
    Developer: 'Suk Serhiy',
    Email: 'sukserhiy@gmail.com'
  }
};

class App extends PureComponent {
  componentDidMount() {
    const { setUser } = this.props;
    const username = getCookie('username');
    const email = getCookie('email');
    if (username && email) {
      setUser({ username, email });
    }
  }

  linkToSignIn = () => {
    const { user, history, location: { pathname } } = this.props;
    if (!user && pathname !== '/logIn') {
      history.push('/logIn');
    }
  }

  signOut = () => {
    const { history, location: { pathname }, unsetUser } = this.props;
    unsetUser();
    deleteCookie('username');
    deleteCookie('email');
    deleteCookie('token');
    if (pathname === 'tasks') {
      history.push('/');
    }
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <Header
          username={user && user.username}
          signIn={this.linkToSignIn}
          signOut={this.signOut}
        />
        <main>
            <Route path='/' exact render={props => (<HomePage {...props}  />)} />
            <Route exact path='/login' render={props => (
              user ? (
                <Redirect to='/'/>
              ) : (
                <AuthContainer {...props}  />
              )
            )}/>
            <Route exact path='/tasks' render={props => (
              user ? (
                <TaskContainer {...props}  />
              ) : (
                <AuthContainer {...props}  />
              )
            )}/>
            <Route exact path='/signUp' render={props => (
              user ? (
                <Redirect to='/'/>
              ) : (
                <SignUpContainer {...props}  />
              )
            )}/>
        </main>
        <Footer { ...footerInfo } />
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
  setUser: payload => dispatch(setUser(payload)),
  unsetUser: payload => dispatch(unsetUser(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
