import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
  tasks: [],
  isAuthorized: false,
  username: null,
  email: null
});

export default function configureStore(initialState = initState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
}