import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';
import PostsReducer from './postsReducer';

export default combineReducers({
  categoryState: CategoryReducer,
  postsState: PostsReducer
});
