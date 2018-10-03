/* eslint-disable */

import moxios from 'moxios';

import * as actions from './categoriesAction';
import * as types from './';

import CategoryMock from '../testHelpers/mocks/categories';

describe('CategoriesActions', () => {
  let store;

  const categories = [
    CategoryMock.categories[0],
    CategoryMock.categories[1],
    CategoryMock.categories[2]
  ];

  beforeEach(() => {
    store = mockStore({});

    moxios.install();
  });

  afterEach(() => {
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
        response: categories
      });
    });

    const expectedActions = [
      { type: types.GET_CATEGORIES, payload: categories }
    ];

    return store.dispatch(actions.fetchCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
