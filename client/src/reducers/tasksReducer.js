import { List } from 'immutable';

export default (state = List([]), action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return List(action.payload);
    default:
      return state;
  }
}