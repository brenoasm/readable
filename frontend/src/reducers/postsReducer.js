import { ADD } from '../utils/count-modifiers';

import {
  HANDLE_POST,
  HANDLE_POSTS,
  UPDATE_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  CHANGE_COMMENTS_COUNT
} from '../actions/index';

import { validValue, validOption } from '../utils/validations';

export const postsState = {
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
      isFormField: true,
      isValid: null
    },
    body: {
      validations: [validValue],
      isFormField: true,
      isValid: null
    },
    author: {
      validations: [validValue],
      isFormField: true,
      isValid: null
    },
    category: {
      validations: [validOption],
      isFormField: true,
      isValid: null,
      options: [
        {
          label: '',
          value: ''
        }
      ]
    }
  }
};

const PostsReducer = (state = postsState, action) => {
  switch (action.type) {
    case CHANGE_COMMENTS_COUNT:
      const { post } = state;

      const parsedPost = {
        ...post,
        commentCount:
          action.payload === ADD ? post.commentCount + 1 : post.commentCount - 1
      };

      return {
        ...state,
        post: parsedPost
      };

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
      const { posts } = state;

      return {
        ...state,
        posts: posts.map(
          post => (post.id === action.payload.id ? action.payload : post)
        ),
        post: action.payload
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case EDIT_POST:
      const { formProperties } = state;

      const parsedFormProperties = Object.keys(formProperties).reduce(
        (newObj, param) => ({
          ...newObj,
          [param]: {
            ...formProperties[param],
            value: action.payload[param],
            isValid: true
          }
        }),
        {}
      );

      return {
        ...state,
        formProperties: parsedFormProperties
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.map(
          p => (p.id === action.payload.id ? action.payload : p)
        ),
        post: state.post.id === action.payload.id ? action.payload : state.post
      };

    default:
      return state;
  }
};

export default PostsReducer;
