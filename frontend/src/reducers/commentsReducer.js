import {
  CREATE_COMMENT,
  HANDLE_DELETE_COMMENT,
  UPDATE_COMMENT,
  HANDLE_COMMENTS,
  HANDLE_EDIT_COMMENT_CLICK } from '../actions/index';

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
    case HANDLE_EDIT_COMMENT_CLICK:
      const { formProperties } = state;

      const parsedFormProperties = Object.keys(formProperties).reduce((newObj, param) => ({
        ...newObj,
        [param]: {
          ...formProperties[param],
          value: action.payload[param],
          isValid: true,
        }
      }), {})

      return {
        ...state,
        formProperties: parsedFormProperties
      }

    case HANDLE_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }

    case CREATE_COMMENT:
      const { comments } = state;

      return {
        ...state,
        comments: [
          ...comments,
          action.payload
        ]
      }

    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(c => c.id === action.payload.id ? action.payload : c)
      }

    case HANDLE_DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(c => c.id !== action.payload)
      }

    default:
      return state;
  }
};

export default CommentsReducer;
