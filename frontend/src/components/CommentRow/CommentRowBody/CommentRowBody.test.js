/* eslint-disable */

import React from 'react';

import CommentRowBody from './';

describe('CommentRowbody', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comment: {
        id: '1',
        parentId: '12',
        timestamp: 1538417732043,
        body: 'Test',
        author: 'Breno',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      },
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
