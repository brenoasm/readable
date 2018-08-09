import { combineReducers } from 'redux';

import CategoryReducer from './categoryReducer';

export default combineReducers({
  categoryState: CategoryReducer
});
