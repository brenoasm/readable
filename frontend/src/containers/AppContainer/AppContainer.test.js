import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import { modalState } from '../../reducers';

import AppContainer from './';

const mockStore = configureStore([thunk]);

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

  it('map state and actions to props correctly', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      modalIsVisible: false,
      hideModal: expect.any(Function)
    }));
  })

})
