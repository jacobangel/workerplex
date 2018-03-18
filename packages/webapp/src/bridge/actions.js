export const FETCH_GALLERIES = 'FETCH_GALLERIES';
export const FETCH_GALLERIES_SUCCESS = 'FETCH_GALLERIES_SUCCESS';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export function removeImage(id) {
  return {
    type: REMOVE_IMAGE,
    id
  }
}

export function fetchGallery() {
  return {
    type: FETCH_GALLERIES,
  };
}

export function fetchGalleryAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(fetchGallery());
    }, 1000);
  };
}

