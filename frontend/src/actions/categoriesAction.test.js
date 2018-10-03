/* eslint-disable */

import moxios from 'moxios';

import { categoryState } from '../reducers';

import * as actions from './categoriesAction';
import * as types from './';

describe('CategoriesActions', () => {
  let store;

  const categories = [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ];

  beforeEach(() => {
    store = mockStore({ categoryState });

    moxios.install();
  });

  afterEach(() => {
    store = mockStore({});

    moxios.uninstall();
  });

  it('creates the GET_CATEGORY correctly', () => {
    const expectedActions = [
      { type: types.GET_CATEGORIES, payload: categories }
    ];

    store.dispatch(actions.handleCategories(categories));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates GET_CATEGORIES action when done fetching', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: {
          data: categories
        }
      });

      const expectedActions = [
        { type: types.GET_CATEGORIES, payload: categories }
      ];

      return store.dispatch(actions.fetchCategories())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

  });
});
