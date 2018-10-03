/* eslint-disable */

import * as actions from './sortMethodAction';
import * as types from './';

describe('PostsAction', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it(`creates HANDLE_SORT_METHOD correctly`, () => {
    const expectedActions = [
      { type: types.HANDLE_SORT_METHOD, payload: 'testing' }
    ];

    store.dispatch(actions.handleSortMethod('testing'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
