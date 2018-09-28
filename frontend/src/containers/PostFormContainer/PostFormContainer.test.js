/* eslint-disable */

import React from 'react';

import { categoryState, postsState } from '../../reducers';

import PostFormContainer from './';

describe('PostFormContainer', () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = {
      postsState: {
        ...postsState
      },
      categoryState: {
        ...categoryState
      }
    };

    store = mockStore(initialState);
    store.dispatch = jest.fn();

    wrapper = shallow(<PostFormContainer />, { context: { store } });
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders the container', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('map states and actions properly', () => {
    expect(wrapper.props()).toEqual({
      postFormProperties: {
        id: { isFormField: false },
        timestamp: { isFormField: false },
        title: { validations: expect.any(Array), isFormField: true, isValid: null },
        body: { validations: expect.any(Array), isFormField: true, isValid: null },
        author: { validations: expect.any(Array), isFormField: true, isValid: null },
        category: {
          validations: expect.any(Array),
          isFormField: true,
          isValid: null,
          options: expect.any(Array)
        }
      },
      categories: undefined,
      post: null,
      onSubmit: expect.any(Function),
      fetchCategories: expect.any(Function)
    });
  })

});
