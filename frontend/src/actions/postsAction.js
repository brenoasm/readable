import axios from 'axios';

import { getRandomId } from '../utils/setup-form-properties';

import { handleGetComments } from './commentsAction';

import {
  HANDLE_POST,
  HANDLE_POSTS,
  UPDATE_POST,
  CREATE_POST,
  EDIT_POST
} from '.';

import header from '../utils/header';

export const editPost = post => ({
  type: EDIT_POST,
  payload: post
});

export const submitPost = post => dispatch => {
  const url = 'http://localhost:3001/posts';

  const min = 0;
  const max = 1000;
  const timestamp = post.timestamp.value || Date.now();
  const id =
    post.id.value || getRandomId(min, max, String(timestamp).substring(0, 4));

  // Corrigir a criação/edição de um id e timestamp
  const body = {
    ...post
  };

  if (post.id) {
    axios
      .put(url, post, header)
      .then(({ data }) => dispatch(updatePost(data)))
      .catch(err => console.log(err));
  } else {
    axios
      .post(url, body, header)
      .then(({ data }) => dispatch(createPost(data)))
      .catch(err => console.log(err));
  }
};

export const getCategoryPosts = category => dispatch => {
  const url = `http://localhost:3001/${category}/posts`;

  axios
    .get(url, header)
    .then(({ data }) => dispatch(handlePosts(data)))
    .catch(err => console.log(err));
};

export const getAllPosts = () => dispatch => {
  const url = `http://localhost:3001/posts`;

  axios
    .get(url, header)
    .then(({ data }) => dispatch(handlePosts(data)))
    .catch(err => console.log(err));
};

export const modifyPostVoteValues = (post, vote) => dispatch => {
  const url = `http://localhost:3001/posts/${post.id}`;

  const body = {
    option: vote
  };

  axios
    .post(url, body, header)
    .then(({ data }) => dispatch(updatePost(data)))
    .catch(err => console.log(err));
};

export const handleGetPost = id => dispatch => {
  const url = `http://localhost:3001/posts/${id}`;

  axios
    .get(url, header)
    .then(({ data }) => {
      dispatch(handleGetComments(id));
      dispatch(handlePost(data));
    })
    .catch(err => console.log(err));
};

export const handlePost = post => ({
  type: HANDLE_POST,
  payload: post
});

export const handlePosts = posts => ({
  type: HANDLE_POSTS,
  payload: posts
});

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post
});
