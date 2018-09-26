import { GET_CATEGORIES } from '../actions';

export const categoriesState = {
  categories: []
};

const CategoryReducer = (state = categoriesState, action) => {
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
