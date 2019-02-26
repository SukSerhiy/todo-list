import { combineReducers } from 'redux-immutable';
import tasks from './tasksReducer';
import user from './userReducer';

export default combineReducers({
  tasks,
  user
});