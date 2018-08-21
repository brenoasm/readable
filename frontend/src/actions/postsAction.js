import axios from 'axios';

import { handleGetComments } from './commentsAction';

import { HANDLE_POST, HANDLE_POSTS, UPDATE_POST } from '.';

import header from '../utils/header';

export const getCategoryPosts = category => dispatch => {
  const url = `http://localhost:3001/${category}/posts`;

  axios.get(url, header)
    .then(({data}) => dispatch(handlePosts(data)))
    .catch(err => console.log(err))
};

export const getAllPosts = () => dispatch => {
  const url = `http://localhost:3001/posts`;

  axios.get(url, header)
    .then(({data}) => dispatch(handlePosts(data)))
    .catch(err => console.log(err))
};

export const modifyPostVoteValues = (post, vote) => dispatch => {
  const url = `http://localhost:3001/posts/${post.id}`;

  const body = {
    option: vote
  };

  axios.post(url, body, header)
    .then(({data}) => dispatch(updatePost(data)))
    .catch(err => console.log(err))
};

export const handleGetPost = id => dispatch => {
  const url = `http://localhost:3001/posts/${id}`;

  axios.get(url, header)
    .then(({data}) => {
      dispatch(handleGetComments(id));
      dispatch(handlePost(data));
    })
    .catch(err => console.log(err))
};

export const handlePost = post => ({
  type: HANDLE_POST,
  payload: post
});

export const handlePosts = posts => ({
  type: HANDLE_POSTS,
  payload: posts
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post
});
