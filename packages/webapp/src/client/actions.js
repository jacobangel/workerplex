export const FETCH_STATE = 'FETCH_STATE';
export const FETCH_STATE_SUCCESS = 'FETCH_STATE_SUCCESS';

export function fetchState(state) {
  console.log(state);
  return {
    type: FETCH_STATE,
    isLoading: true,
    state,
  };
}

export function fetchStateSuccess(state) {
  return {
    type: FETCH_STATE_SUCCESS,
    isLoading: false,
    state,
  };
}


