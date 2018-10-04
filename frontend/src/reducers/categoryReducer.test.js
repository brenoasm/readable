/* eslint-disable */

import * as types from '../actions';
import CategoryReducer, { categoriesState } from './categoryReducer';

import CategoryMock from '../testHelpers/mocks/categories';

describe('CategoryReducer', () => {
  it('handle the right InitialState', () => {
    expect(CategoryReducer(undefined, {})).toEqual(categoriesState);
  });

  it('handle GET_CATEGORIES correctly', () => {
    const categories = [
      CategoryMock.categories[0],
      CategoryMock.categories[1]
    ];

    const action = {
      type: types.GET_CATEGORIES,
      payload: {
        categories
      }
    };

    expect(CategoryReducer({}, action)).toEqual({
      categories
    });
  });
});
