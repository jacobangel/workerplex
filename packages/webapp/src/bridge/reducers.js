import { fetchGallery } from './actions.js';
import { combineReducers } from 'redux';

const defaultState = [];
const gallery = (state = [], action) => {
  switch (action.type) {
    default:
    return defaultState;
  }
};


export default combineReducers({
  gallery
})