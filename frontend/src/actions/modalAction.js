import { TOGGLE_MODAL_VISIBILITY } from '.';

export const showModal = () => ({
  type: TOGGLE_MODAL_VISIBILITY,
  payload: true
});

export const hideModal = () => ({
  type: TOGGLE_MODAL_VISIBILITY,
  payload: false
});
