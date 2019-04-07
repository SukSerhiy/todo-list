import { SET_TASKS } from '../constants/actionTypes';

const setTasks = payload => dispatch => {
  dispatch({
    type: SET_TASKS,
    payload
  });
}

export { setTasks };