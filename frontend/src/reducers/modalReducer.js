import { TOGGLE_MODAL_VISIBILITY } from '../actions';

export const modalState = {
  show: false
};

const ModalReducer = (state = modalState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return {
        ...state,
        show: action.payload
      };
    default:
      return state;
  }
};

export default ModalReducer;
