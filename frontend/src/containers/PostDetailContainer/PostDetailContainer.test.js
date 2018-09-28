/* eslint-disable */

import React from 'react';

import { postsState, commentsState, modalState } from '../../reducers';

import PostDetailContainer from './';

describe('PostDetailContainer', () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = {
      postsState: {
        ...postsState
      },
      commentsState: {
        ...commentsState
      },
      modalState: {
        ...modalState
      }
    };

    const router = getRouterMock({ match: {
      params: { categoryName: 'redux' }
    }});

    store = mockStore(initialState);
    store.dispatch = jest.fn();

    wrapper = shallowUntilTarget(<PostDetailContainer />,
      'PostDetailContainer', // Arrumar forma melhor de achar o componente
      { store, router });
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders the container', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('map states and actions properly', () => {
    expect(wrapper.props()).toEqual({
      match: expect.any(Object),
      location: expect.any(Object),
      history: expect.any(Object),
      post: null,
      comments: expect.any(Array),
      modalIsVisible: false,
      fetchPost: expect.any(Function),
      getAllPosts: expect.any(Function),
      modifyPostVoteValues: expect.any(Function),
      showModal: expect.any(Function),
      hideModal: expect.any(Function),
      editPost: expect.any(Function),
      deletePost: expect.any(Function),
      editClick: expect.any(Function),
      deleteComment: expect.any(Function),
      modifyCommentVoteValues: expect.any(Function),
    })
  })
})
