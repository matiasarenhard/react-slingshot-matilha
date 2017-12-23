import {
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE
} from '../constants/actionTypes';

import objectAssign from 'object-assign';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {

  switch (action.type) {
    case SAVE_USER:
      return objectAssign({}, state, {fetching: true});
    case SAVE_USER_SUCCESS:
      return objectAssign({}, state, {fetching: false});
    case SAVE_USER_FAILURE:
      return objectAssign({}, state, {fetching: false, error: true});

    // case GET_USERS:
    // return objectAssign({}, state, );

    default:
      return state;
  }
}
