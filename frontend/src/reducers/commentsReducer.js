import { HANDLE_COMMENTS } from '../actions/index';

const initialState = {
  comments: []
};

const CommentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state;
  }
};

export default CommentsReducer;
