import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import 'element-theme-default';
import './index.css';

ReactDOM.render(
    (<Provider store={configureStore()}>
      <App />
    </Provider>), 
    document.getElementById('root'));
