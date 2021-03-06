import { Map } from 'immutable';

export default (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { username, email } = action.payload; 
      return Map({ username, email });
    case 'UNSET_USER':
      return null;
    default:
      return state;
  }
}