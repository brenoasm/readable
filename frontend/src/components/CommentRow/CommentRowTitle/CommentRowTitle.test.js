/* eslint-disable */

import React from 'react';

import CommentRowTitle from './';

import CommentMock from '../../../testHelpers/mocks/comments';

describe('CommentRowTitle', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comment: CommentMock.comments[0],
      editClick: jest.fn(),
      deleteComment: jest.fn()
    };

    wrapper = shallow(<CommentRowTitle {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one EditIcon component', () => {
    expect(wrapper.find('EditIcon')).toHaveLength(1);
  });

  it('should have one DeleteIcon component', () => {
    expect(wrapper.find('DeleteIcon')).toHaveLength(1);
  });
});
