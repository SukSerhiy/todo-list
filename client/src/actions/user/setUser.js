const setTasks = payload => dispatch => {
  dispatch({
    type: 'SET_USER',
    payload
  });
}

export default setTasks;