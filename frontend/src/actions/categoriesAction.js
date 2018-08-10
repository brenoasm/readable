import axios from 'axios';

import { GET_CATEGORIES } from './index';

export const getCategories = () => ({
  type: GET_CATEGORIES
});

export const getCategoryDetail = category => (dispatch, getState) => {
  const url = `http://localhost:3001/${category}/posts`;

  axios.get(url, {headers: { 'Authorization': 'whatever-you-want' }}).then(res => {
    // const posts = res.json();
    debugger
    return res;
  });
};
