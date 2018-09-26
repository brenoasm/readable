import sortMethods, { SORT_BY_DATE } from '../utils/sort-methods';
import { HANDLE_SORT_METHOD } from '../actions';

export const sortMethodState = {
  sortMethods,
  sortBy: SORT_BY_DATE
};

const SortMethodReducer = (state = sortMethodState, action) => {
  switch(action.type) {
    case HANDLE_SORT_METHOD:
      return {
        ...state,
        sortBy: action.payload
      }
    default:
      return state;
  }
};

export default SortMethodReducer;
