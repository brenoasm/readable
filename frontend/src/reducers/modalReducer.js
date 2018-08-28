import { TOGGLE_MODAL_VISIBILITY } from '../actions';

const initialState = {
  show: false
};

const ModalReduer = (state = initialState, action) => {
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

export default ModalReduer;
