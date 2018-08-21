import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';
import PostsReducer from './postsReducer';
import CommentsReducer from './commentsReducer';

export default combineReducers({
  categoryState: CategoryReducer,
  postsState: PostsReducer,
  commentsState: CommentsReducer
});
