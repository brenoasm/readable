/* eslint-disable */

import React from 'react';

import CommentRow from './';

describe('CommentRow', () => {
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
