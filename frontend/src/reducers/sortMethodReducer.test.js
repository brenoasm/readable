/* eslint-disable */

import * as types from '../actions';
import SortMethodReducer, { sortMethodState } from './sortMethodReducer';

describe('SortMethodReducer', () => {
  it('handle the right InitialState', () => {
    expect(SortMethodReducer(undefined, {})).toEqual(sortMethodState);
  });

  it('handle TOGGLE_MODAL_VISIBILITY correctly', () => {
    const expectedPayload = 'testing things';

    const action = {
      type: types.HANDLE_SORT_METHOD,
      payload: expectedPayload
    };

    const expectedState = {
      ...sortMethodState,
      sortBy: expectedPayload
    };

    expect(SortMethodReducer(undefined, action)).toEqual(expectedState);
  });
});
