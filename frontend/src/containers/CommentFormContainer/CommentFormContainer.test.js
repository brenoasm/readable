/* eslint-disable */

import React from 'react';

import CommentFormContainer from './';

import { commentsState, postsState } from '../../reducers';

describe('CommentFormContainer', () => {
  let store, wrapper;

  beforeEach(() => {
    const initialState = {
      commentsState: {
        ...commentsState,
        comments: [
          {
            id: '894tuq4ut84ut8v4t8wun89g',
            parentId: '8xf0y6ziyjabvozdd253nd',
            timestamp: 1468166872634,
            body: 'Hi there! I am a COMMENT.',
            author: 'thingtwo',
            voteScore: -1,
            deleted: false,
            parentDeleted: false
          },
          {
            id: '8tu4bsun805n8un48ve89',
            parentId: '8xf0y6ziyjabvozdd253nd',
            timestamp: 1469479767190,
            body: 'Comments. Are. Cool.',
            author: 'thingone',
            voteScore: 1,
            deleted: false,
            parentDeleted: false
          }
        ]
      },
      postsState: {
        ...postsState,
        post: {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 1,
          deleted: false,
          commentCount: 1
        }
      }
    };

    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = shallow(<CommentFormContainer />, { context: { store } });
  });

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders the container', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('map state and actions to props correctly', () => {
    expect(wrapper.props()).toEqual({
      formProperties: {
        id: { isFormField: false },
        parentId: { isFormField: false },
        timestamp: { isFormField: false },
        body: { validations: expect.any(Array), isFormField: true, isValid: null },
        author: { validations: expect.any(Array), isFormField: true, isValid: null }
      },
      parentId: '8xf0y6ziyjabvozdd253nd',
      onSubmit: expect.any(Function)
    });
  })

});
