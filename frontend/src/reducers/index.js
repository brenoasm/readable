import { combineReducers } from 'redux';

import CategoryReducer, { categoriesState } from './categoryReducer';
import PostsReducer, { postsState } from './postsReducer';
import CommentsReducer, { commentsState } from './commentsReducer';
import SortMethodReducer, { sortMethodState } from './sortMethodReducer';
import ModalReducer, { modalState } from './modalReducer';

export default combineReducers({
  categoryState: CategoryReducer,
  postsState: PostsReducer,
  commentsState: CommentsReducer,
  sortMethodsState: SortMethodReducer,
  modalState: ModalReducer
});

export {
  modalState,
  categoriesState,
  postsState,
  commentsState,
  sortMethodState
};
