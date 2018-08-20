import axios from 'axios';

import { HANDLE_POSTS, UPDATE_POST } from '.';

const header = { headers: { 'Authorization': 'whatever-you-want' } };

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

export const getPost = id => dispatch => {
  const url = `http://localhost:3001/posts/${id}`;

  axios.get(url, header)
    .then(({post}) => {

      // CRIAR O GET PARA O POST E SEUS COMENTÁRIOS
      debugger
    })
    .catch(err => console.log(err))
};

export const handlePosts = posts => ({
  type: HANDLE_POSTS,
  payload: posts
});

export const updatePost = post => ({
  type: UPDATE_POST,
  payload: post
});
