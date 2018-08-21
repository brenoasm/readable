import sortMethods, { SORT_BY_DATE } from '../utils/sort-methods';
import { HANDLE_SORT_METHOD } from '../actions';

const initialState = {
  sortMethods,
  sortBy: SORT_BY_DATE
};

const SortMethodReducer = (state = initialState, action) => {
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
