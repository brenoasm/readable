/* eslint-disable */

import React from 'react';

import CommentRow from './';

import CommentMock from '../../testHelpers/mocks/comments';

describe('CommentRow', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comment: CommentMock.comments[0],
      deleteComment: jest.fn(),
      editClick: jest.fn(),
      modifyCommentVoteValues: jest.fn()
    };

    wrapper = shallow(<CommentRow {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one CommentRowTitle component', () => {
    expect(wrapper.find('CommentRowTitle')).toHaveLength(1);
  });

  it('should have one CommentRowBody', () => {
    expect(wrapper.find('CommentRowBody')).toHaveLength(1);
  });

});
