import { SET_USER, UNSET_USER } from '../constants/actionTypes';

const setUser = payload => dispatch => {
  dispatch({
    type: SET_USER,
    payload
  });
}

const unsetUser = () => dispatch => {
  dispatch({
    type: UNSET_USER
  });
}

export { setUser, unsetUser };