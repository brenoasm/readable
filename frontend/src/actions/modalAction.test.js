/* eslint-disable */

import * as actions from './modalAction';
import * as types from './';

describe('ModalAction', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it(`creates TOGGLE_MODAL_VISIBILITY (with payload true) correctly`, () => {
    const expectedActions = [
      { type: types.TOGGLE_MODAL_VISIBILITY, payload: true }
    ];

    store.dispatch(actions.showModal());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`creates TOGGLE_MODAL_VISIBILITY (with payload false) correctly`, () => {
    const expectedActions = [
      { type: types.TOGGLE_MODAL_VISIBILITY, payload: false }
    ];

    store.dispatch(actions.hideModal());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
