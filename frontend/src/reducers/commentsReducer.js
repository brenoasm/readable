import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  HANDLE_COMMENTS } from '../actions/index';

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

    case CREATE_COMMENT:
    debugger
      const { comments } = state;

      return {
        ...state,
        comments: [
          ...comments,
          action.payload
        ]
      }

    case UPDATE_COMMENT:
      // const { comments } = state;
      // Provavelmente terei que implementar o update do state Comment, que eu ainda n criei

      return {
        ...state,
        comments: state.comments.map(c => c.id === action.payload.id ? action.payload : c)
      }

    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(c => c.id !== action.payload)
      }

    default:
      return state;
  }
};

export default CommentsReducer;
