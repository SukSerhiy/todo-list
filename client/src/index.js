import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import 'element-theme-default';
import './index.css';

const history = createHistory();

ReactDOM.render(
    (<Provider store={configureStore()}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>), 
    document.getElementById('root'));
