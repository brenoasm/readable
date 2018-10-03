import axios from 'axios';

import { GET_CATEGORIES } from '.';

import header from '../utils/header';

export const fetchCategories = () => dispatch => {
  const url = 'http://localhost:3001/categories';

  return axios.get(url, header)
    .then(({data}) => dispatch(handleCategories(data)))
    .catch(err => console.log(err))
};

export const handleCategories = categories => ({
  type: GET_CATEGORIES,
  payload: categories
});
