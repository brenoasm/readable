/* eslint-disable */

import React from 'react';

import { categoryState, postsState, sortMethodsState } from '../../reducers';

import HomeContainer from './';

describe('HomeContainer', () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = {
      categoryState: {
        ...categoryState,
        categories: []
      },
      postsState: {
        ...postsState
      },
      sortMethodsState: {
        ...sortMethodsState
      }
    };

    const router = getRouterMock({
      match: {
        params: { categoryName: 'redux' }
      }
    });

    store = mockStore(initialState);
    store.dispatch = jest.fn();

    wrapper = shallowUntilTarget(
      <HomeContainer />,
      'HomeContainer', // Arrumar forma melhor de achar o componente
      { store, router }
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the container', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('map states and actions properly', () => {
    const expectedProps = {
      activeRoute: expect.any(String),
      categories: expect.any(Array),
      deletePost: expect.any(Function),
      editPost: expect.any(Function),
      fetchCategories: expect.any(Function),
      getAllPosts: expect.any(Function),
      getCategoryPosts: expect.any(Function),
      getSelectedSortMethod: expect.any(Function),
      history: expect.any(Object),
      location: expect.any(Object),
      match: { params: { categoryName: 'redux' } },
      modifyPostVoteValues: expect.any(Function),
      posts: expect.any(Array),
      selectedSortMethod: expect.any(String),
      showModal: expect.any(Function),
      sortMethods: expect.any(Array)
    };

    expect(wrapper.props()).toEqual(expectedProps);
  });
});
