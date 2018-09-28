/* eslint-disable */

import React from 'react';

import CommentsList from './';

describe('CommentsList', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comments: [
        {
          id: '1',
          parentId: '12',
          timestamp: 1538417732043,
          body: 'Test',
          author: 'Breno',
          voteScore: 1,
          deleted: false,
          parentDeleted: false
        },
        {
          id: '2',
          parentId: '12',
          timestamp: 1538419906880,
          body: 'Test 2',
          author: 'Joãozinho',
          voteScore: 2,
          deleted: false,
          parentDeleted: false
        },
      ],
      deleteComment: jest.fn(),
      editClick: jest.fn(),
      modifyCommentVoteValues: jest.fn()
    };

    wrapper = shallow(<CommentsList {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two CommentRow component', () => {
    expect(wrapper.find('CommentRow')).toHaveLength(2);
  })

  it('should order the comments by voteScore desc', () => {
    const commentRows = wrapper.find('CommentRow');

    expect(commentRows.get(0).props.comment.voteScore)
      .toBeGreaterThan(commentRows.get(1).props.comment.voteScore);
  });
});
