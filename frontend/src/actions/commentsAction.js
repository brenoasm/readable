import axios from 'axios';

import { changeCommentsCount } from './postsAction';

import { getRandomId } from '../utils/unique-key-generator';
import { SUBTRACT, ADD } from '../utils/count-modifiers';

import {
  CREATE_COMMENT,
  UPDATE_COMMENT,
  HANDLE_COMMENTS,
  HANDLE_EDIT_COMMENT_CLICK,
  HANDLE_DELETE_COMMENT
} from '.';

import header from '../utils/header';

export const modifyCommentVoteValues = (comment, vote) => dispatch => {
  const url = `http://localhost:3001/comments/${comment.id}`;

  const body = {
    option: vote
  };

  axios
    .post(url, body, header)
    .then(({ data }) => dispatch(updateComment(data)))
    .catch(err => console.log(err));
};

export const handleGetComments = postId => dispatch => {
  const url = `http://localhost:3001/posts/${postId}/comments`;

  axios.get(url, header)
    .then(({
      data
    }) => dispatch(handleComments(data)))
};

export const handleDeleteComment = (id) => ({
  type: HANDLE_DELETE_COMMENT,
  payload: id
});

export const handleEditCommentClick = comment => ({
  type: HANDLE_EDIT_COMMENT_CLICK,
  payload: comment
});

export const submitComment = (comment, parentId) => dispatch => {
  const min = 0;
  const max = 1000;
  const timestamp = comment.timestamp || Date.now();
  const id =
  comment.id || getRandomId(min, max, String(timestamp).substring(0, 4));

  const body = {
    ...comment,
    id,
    timestamp,
    parentId: comment.parentId || parentId
  };

  if (comment.id) {
    axios.put(`http://localhost:3001/comments/${comment.id}`, body, header)
      .then(({data}) => dispatch(updateComment(data)))
      .catch(err => console.error(err));
  } else {
    axios.post('http://localhost:3001/comments', body, header)
      .then(({data}) => {
        dispatch(createComment(data))
        dispatch(changeCommentsCount(ADD))
      })
      .catch(err => console.error(err));
  }
};

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  payload: comment
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  payload: comment
});

export const deleteComment = id => dispatch => {
  const url = `http://localhost:3001/comments/${id}`;

  axios.delete(url, header)
    .then(() => {
      dispatch(handleDeleteComment(id))
      dispatch(changeCommentsCount(SUBTRACT))
    })
    .catch(err => console.log(err));
};

export const handleComments = comments => ({
  type: HANDLE_COMMENTS,
  payload: comments
});
