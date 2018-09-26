import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CommentFormContainer from './';

import { commentsState, postsState } from '../../reducers';

const mockStore = configureStore([thunk]);

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

  it('map state and actions to props correctly', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      formProperties: expect.any(Object),
      parentId: expect.any(String),
      onSubmit: expect.any(Function)
    }));
  })

});
