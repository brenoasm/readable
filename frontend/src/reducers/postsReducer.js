import {
  HANDLE_POST,
  HANDLE_POSTS,
  UPDATE_POST,
  CREATE_POST,
  EDIT_POST
} from '../actions/index';

import { validValue, validOption } from '../utils/validations';

const initialState = {
  posts: [],
  post: null,
  formProperties: {
    id: {
      isFormField: false
    },
    timestamp: {
      isFormField: false
    },
    title: {
      validations: [validValue],
      isFormField: true
    },
    body: {
      validations: [validValue],
      isFormField: true
    },
    author: {
      validations: [validValue],
      isFormField: true
    },
    category: {
      validations: [validOption],
      isFormField: true,
      options: [{ label: '', value: '' }]
    }
  }
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_POST:
      return {
        ...state,
        post: action.payload
      };
    case HANDLE_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(
          post => (post.id === action.payload.id ? action.payload : post)
        )
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      }
    case EDIT_POST:
      const { formProperties } = state;
      let parsedFormProperties = {};

      Object.keys(formProperties).forEach(param => {
        const property = formProperties[param];
        const propertyNewValue = action.payload[param];

        parsedFormProperties = {
          ...parsedFormProperties,
          [param]: {
            ...property,
            value: propertyNewValue
          }
        }
      });

      return {
        ...state,
        formProperties: parsedFormProperties
      }
    default:
      return state;
  }
};

export default PostsReducer;
