const initialState = {
  categories: [
    {
      name: 'Home',
      path: ''
    },
    {
      name: 'React',
      path: 'react'
    },
    {
      name: 'Redux',
      path: 'redux'
    },
    {
      name: 'Udacity',
      path: 'udacity'
    }
  ]
};

const CategoryReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default CategoryReducer;
