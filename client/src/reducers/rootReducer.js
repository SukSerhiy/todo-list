import { combineReducers } from 'redux-immutable';
import tasks from './tasksReducer';

export default combineReducers({
  tasks
});