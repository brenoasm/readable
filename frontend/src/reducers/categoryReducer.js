import { GET_CATEGORIES } from '../actions';

const initialState = {
  categories: []
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [
          ...action.payload.categories,
        ]
      };
    default:
      return state;
  }
};

export default CategoryReducer;
