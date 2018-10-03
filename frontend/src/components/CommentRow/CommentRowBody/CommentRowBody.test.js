/* eslint-disable */

import React from 'react';

import CommentRowBody from './';

import CommentMock from '../../../testHelpers/mocks/comments';

describe('CommentRowbody', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comment: CommentMock.comments[0],
      modifyCommentVoteValues: jest.fn()
    };

    wrapper = shallow(<CommentRowBody {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount;
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one Ratings component', () => {
    expect(wrapper.find('Ratings')).toHaveLength(1);
  });

});
