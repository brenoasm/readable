/* eslint-disable */

import moxios from 'moxios';

import * as actions from './commentsAction';
import * as types from './';

import { SUBTRACT, ADD } from '../utils/count-modifiers';

import CommentMock from '../testHelpers/mocks/comments';
import PostMock from '../testHelpers/mocks/posts';

describe('CommentsAction', () => {
  let store;

  const comments = [CommentMock.comments[0], CommentMock.comments[1]];
  const post = PostMock.posts[0];

  beforeEach(() => {
    store = mockStore({});

    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it(`creates the UPDATE_COMMENT correctly when
    modifyCommentVotesValues its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: comments[0]
      });
    });

    const expectedActions = [
      { type: types.UPDATE_COMMENT, payload: comments[0] }
    ];

    return store
      .dispatch(actions.modifyCommentVoteValues(comments[0], 'testing'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it(`creates the HANDLE_COMMENTS correctly when
    handleGetComments its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: comments
      });
    });

    const expectedActions = [
      { type: types.HANDLE_COMMENTS, payload: comments }
    ];

    return store.dispatch(actions.handleGetComments(post.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it(`creates the CREATE_COMMENT correctly when
    submitComment its done`, () => {
    const newComment = {
      ...comments[0],
      id: null,
      timestamp: null,
      body: 'Testing new comment',
      title: 'Breno'
    };

    const newCommetAfterSubmit = {
      ...newComment,
      id: '99',
      timestamp: 1538419906880
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: newCommetAfterSubmit
      });
    });

    const expectedActions = [
      {
        type: types.CREATE_COMMENT,
        payload: newCommetAfterSubmit
      },
      {
        type: types.CHANGE_COMMENTS_COUNT,
        payload: ADD
      }
    ];

    return store
      .dispatch(actions.submitComment(newComment, post.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it(`creates the UPDATE_COMMENT correctly when
    submitComment its done`, () => {
    const updatedComment = {
      ...comments[0],
      body: 'Testing update'
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: updatedComment
      });
    });

    const expectedActions = [
      {
        type: types.UPDATE_COMMENT,
        payload: updatedComment
      }
    ];

    return store
      .dispatch(actions.submitComment(updatedComment, post.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it(`creates the DELETE_COMMENT correctly when
    deleteComment its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200
      });
    });

    const expectedActions = [
      { type: types.HANDLE_DELETE_COMMENT, payload: comments[0].id },
      { type: types.CHANGE_COMMENTS_COUNT, payload: SUBTRACT }
    ];

    store.dispatch(actions.deleteComment(comments[0].id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates the HANDLE_EDIT_COMMENT_CLICK correctly', () => {
    const expectedActions = [
      { type: types.HANDLE_EDIT_COMMENT_CLICK, payload: comments[0] }
    ];

    store.dispatch(actions.handleEditCommentClick(comments[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates the UPDATE_COMMENT correctly', () => {
    const expectedActions = [
      { type: types.UPDATE_COMMENT, payload: comments[0] }
    ];

    store.dispatch(actions.updateComment(comments[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates the CREATE_COMMENT correctly', () => {
    const expectedActions = [
      { type: types.CREATE_COMMENT, payload: comments[0] }
    ];

    store.dispatch(actions.createComment(comments[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates the HANDLE_DELETE_COMMENT correctly', () => {
    const expectedActions = [
      { type: types.HANDLE_DELETE_COMMENT, payload: comments[0] }
    ];

    store.dispatch(actions.handleDeleteComment(comments[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates the HANDLE_COMMENTS correctly', () => {
    const expectedActions = [
      { type: types.HANDLE_COMMENTS, payload: comments[0] }
    ];

    store.dispatch(actions.handleComments(comments[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
