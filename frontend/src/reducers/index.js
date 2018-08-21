import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';
import PostsReducer from './postsReducer';
import CommentsReducer from './commentsReducer';
import SortMethodReducer from './sortMethodReducer';

export default combineReducers({
  categoryState: CategoryReducer,
  postsState: PostsReducer,
  commentsState: CommentsReducer,
  sortMethodsState: SortMethodReducer
});
