import axios from 'axios';

import { HANDLE_POSTS } from '.';

export const getCategoryPosts = category => (dispatch, getState) => {
  const url = `http://localhost:3001/${category}/posts`;

  axios.get(url, {headers: { 'Authorization': 'whatever-you-want' }})
    .then(({data}) => dispatch(handlePosts(data)))
    .catch(err => console.log(err))
};

export const handlePosts = posts => ({
  type: HANDLE_POSTS,
  payload: posts
});
