import axios from 'axios';

import { HANDLE_COMMENTS } from '.';

import header from '../utils/header';

export const handleGetComments = postId => dispatch => {
  const url = `http://localhost:3001/posts/${postId}/comments`;

  axios.get(url, header)
    .then(({data}) => dispatch(handleComments(data)))
};

export const handleComments = comments => ({
  type: HANDLE_COMMENTS,
  payload: comments
});
