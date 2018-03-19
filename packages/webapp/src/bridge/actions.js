export const FETCH_GALLERIES = 'FETCH_GALLERIES';
export const FETCH_GALLERIES_SUCCESS = 'FETCH_GALLERIES_SUCCESS';
export const BRIDGE_STATE_UPDATE = 'BRIDGE_STATE_UPDATE';
export const BRIDGE_STATE_UPDATE_SUCCESS = 'BRIDGE_STATE_UPDATE_SUCCESS';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export function removeImage(id) {
  return {
    type: REMOVE_IMAGE,
    id
  }
}

export function fetchGallery(gallery) {
  return {
    type: FETCH_GALLERIES,
    gallery
  };
}
