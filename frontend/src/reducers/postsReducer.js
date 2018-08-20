import { HANDLE_POSTS, UPDATE_POST } from '../actions/index';

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
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post)
      }
    default:
      return state;
  }
};

export default PostsReducer;
