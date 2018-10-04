/* eslint-disable */

import * as types from '../actions';
import CommentsReducer, { commentsState } from './commentsReducer';

import CommentMock from '../testHelpers/mocks/comments';
import PostMock from '../testHelpers/mocks/posts';

describe('CommentsReducer', () => {
  const { comments, formProperties } = CommentMock;
  const { posts } = PostMock;

  it('handle the right InitialState', () => {
    expect(CommentsReducer(undefined, {})).toEqual(commentsState);
  });

  it('handle GET_CATEGORIES correctly', () => {
    const post = posts[0];
    const comment = comments[0];

    const action = {
      type: types.HANDLE_EDIT_COMMENT_CLICK,
      payload: comment
    };

    const expectedState = {
      comments: [],
      formProperties: {
        id: {
          isFormField: false,
          value: comment.id,
          isValid: true
        },
        parentId: {
          isFormField: false,
          value: post.id,
          isValid: true
        },
        timestamp: {
          isFormField: false,
          value: comment.timestamp,
          isValid: true
        },
        body: {
          validations: [Array],
          value: comment.body,
          isFormField: true,
          isValid: true,
        },
        author: {
          validations: [Array],
          value: comment.author,
          isFormField: true,
          isValid: true,
        }
      }
    };

    expect(CommentsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle HANDLE_COMMENTS correctly', () => {
    const alteredComments = [
      comments[0],
      comments[1]
    ];

    const action = {
      type: types.HANDLE_COMMENTS,
      payload: alteredComments
    }

    const expectedState = {
      comments: alteredComments,
      formProperties
    };

    expect(CommentsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle CREATE_COMMENT correctly', () => {
    const newComment = {
      ...comments[0],
      id: '99',
      timestamp: 1538419906881,
      body: 'testing'
    };

    const action = {
      type: types.CREATE_COMMENT,
      payload: newComment
    };

    const expectedState = {
      comments: [
        newComment
      ],
      formProperties
    };

    expect(CommentsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle UPDATE_COMMENT correctly', () => {
    const alteredComment = {
      ...comments[0],
      body: 'testing things'
    };

    const action = {
      type: types.UPDATE_COMMENT,
      payload: alteredComment
    };

    const existingState = {
      comments: [
        comments[0],
        comments[1]
      ],
      formProperties
    };

    const expectedState = {
      comments: [
        alteredComment,
        comments[1]
      ],
      formProperties
    };

    expect(CommentsReducer(existingState, action)).toDeepEqual(expectedState);
  });

  it('handle DELETE_COMMENT correctly', () => {
    const action = {
      type: types.HANDLE_DELETE_COMMENT,
      payload: comments[0].id
    };

    const existingState = {
      comments: [
        comments[0],
        comments[1]
      ],
      formProperties
    };

    const expectedState = {
      comments: [
        comments[1]
      ],
      formProperties
    };

    expect(CommentsReducer(existingState, action)).toDeepEqual(expectedState);
  });
});
