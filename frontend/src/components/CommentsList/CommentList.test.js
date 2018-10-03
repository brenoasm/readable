/* eslint-disable */

import React from 'react';

import CommentsList from './';

import CommentMock from '../../testHelpers/mocks/comments';

describe('CommentsList', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comments: [
        CommentMock.comments[0],
        CommentMock.comments[1]
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
