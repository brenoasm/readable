/* eslint-disable */

import React from 'react';

import { modalState } from '../../reducers';

import AppContainer from './';

describe('AppContainer', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      modalState: {
        ...modalState
      }
    };

    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = shallow(<AppContainer/>, { context: { store } });
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('map state and actions to props correctly', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      modalIsVisible: false,
      hideModal: expect.any(Function)
    }));
  })

})
