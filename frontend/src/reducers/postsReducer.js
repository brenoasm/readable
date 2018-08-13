import { HANDLE_POSTS } from '../actions/index';

const initialState = {
  posts: []
};

const PostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case HANDLE_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
};

export default PostsReducer;
