import axios from 'axios';

import { getRandomId } from '../utils/unique-key-generator';

import { handleGetComments } from './commentsAction';

import {
  HANDLE_POST,
  HANDLE_POSTS,
  UPDATE_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  CHANGE_COMMENTS_COUNT
} from '.';

import header from '../utils/header';

export const changeCommentsCount = (modifier) => ({
  type: CHANGE_COMMENTS_COUNT,
  payload: modifier
});

export const submitPost = post => dispatch => {
  const min = 0;
  const max = 1000;
  const timestamp = post.timestamp || Date.now();
  const id =
    post.id || getRandomId(min, max, String(timestamp).substring(0, 4));

  const body = {
    ...post,
    id,
    timestamp
  };

  if (post.id) {
    return axios
      .put(`http://localhost:3001/posts/${id}`, body, header)
      .then(({ data }) => dispatch(updatePost(data)))
      .catch(err => console.error(err));
  } else {
    return axios
      .post(`http://localhost:3001/posts`, body, header)
      .then(({ data }) => dispatch(createPost(data)))
      .catch(err => console.error(err));
  }
};

export const getCategoryPosts = category => dispatch => {
  const url = `http://localhost:3001/${category}/posts`;

  return axios
    .get(url, header)
    .then(({ data }) => dispatch(handlePosts(data)))
    .catch(err => console.log(err));
};

export const getAllPosts = () => dispatch => {
  const url = `http://localhost:3001/posts`;

  return axios
    .get(url, header)
    .then(({ data }) => dispatch(handlePosts(data)))
    .catch(err => console.log(err));
};

export const modifyPostVoteValues = (post, vote) => dispatch => {
  const url = `http://localhost:3001/posts/${post.id}`;

  const body = {
    option: vote
  };

  return axios
    .post(url, body, header)
    .then(({ data }) => dispatch(updatePost(data)))
    .catch(err => console.log(err));
};

export const handleGetPost = id => dispatch => {
  const url = `http://localhost:3001/posts/${id}`;

  return axios
    .get(url, header)
    .then(({ data }) => {
      dispatch(handleGetComments(id));
      dispatch(handlePost(data));
    })
    .catch(err => console.log(err));
};

export const handleDeletePost = post => ({
  type: DELETE_POST,
  payload: post
});

export const handlePost = post => ({
  type: HANDLE_POST,
  payload: post
});

export const handlePosts = posts => ({
  type: HANDLE_POSTS,
  payload: posts
});

export const editPost = post => ({
  type: EDIT_POST,
  payload: post
});

export const createPost = post => ({
  type: CREATE_POST,
  payload: post
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post
});

export const deletePost = post => dispatch => {
  const url = `http://localhost:3001/posts/${post.id}`;

  return axios.delete(url, header)
    .then(({data}) => dispatch(handleDeletePost(data)))
    .catch(err => console.log(err));
};
