import { combineReducers } from 'redux'
import { FETCH_STATE, FETCH_STATE_SUCCESS } from './actions';

const defaultState = { images: [] };
const appState = (state = {}, action) => {
  console.log(state, action.type, action);
  switch (action.type) {
    case FETCH_STATE:
    return {
      ...state
    }

    case FETCH_STATE_SUCCESS:
    return {
      ...state,
      ...action.state,
    }

    default:
    return defaultState;
  }
};


export default combineReducers({
  appState
})