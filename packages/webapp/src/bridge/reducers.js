import { FETCH_GALLERIES, fetchGallery } from './actions';
import { combineReducers } from 'redux'

const defaultState = [];
const gallery = (state = [], action) => {
  switch (action.type) {
    case FETCH_GALLERIES:
    return [ ...state, ...action.gallery ];

    default:
    return defaultState;
  }
};


export default combineReducers({
  gallery
})