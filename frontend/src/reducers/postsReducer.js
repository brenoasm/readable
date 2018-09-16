import {
  HANDLE_POST,
  HANDLE_POSTS,
  UPDATE_POST,
  CREATE_POST,
  EDIT_POST
} from '../actions/index';

import {
  validValue,
  validOption
} from '../utils/validations';

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
      isFormField: true,
      isValid: null,
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
    },
    category: {
      validations: [validOption],
      isFormField: true,
      isValid: null,
      options: [{
        label: '',
        value: ''
      }]
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
      const { posts } = state;
      const post = posts.find(p => p.id === action.payload.id);

      const updatedPost = {
        ...post,
        voteScore: action.payload.voteScore
      };

      return {
        ...state,
        posts: posts.map(post => (post.id === action.payload.id ? action.payload : post)),
        post: updatedPost
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
      const {
        formProperties
      } = state;

      const parsedFormProperties = Object.keys(formProperties).reduce((newObj, param) => ({
        ...newObj,
        [param]: {
          ...formProperties[param],
          value: action.payload[param],
          isValid: true,
        }
      }), {});

      return {
        ...state,
        formProperties: parsedFormProperties
      }

    default:
      return state;
  }
};

export default PostsReducer;
