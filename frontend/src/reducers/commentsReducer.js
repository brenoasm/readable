import { HANDLE_COMMENTS } from '../actions/index';

import { validValue } from '../utils/validations';

const initialState = {
  comments: [],
  formProperties: {
    id: {
      isFormField: false
    },
    parentId: {
      isFormField: false
    },
    timestamp: {
      isFormField: false
    },
    body: {
      validations: [validValue],
      isFormField: true,
      isValid: null,
    },
    author: {
      validations: [validValue],
      isFormField: true,
      isValid: null,
    }
  }
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
