/* eslint-disable */

import React from 'react';

import PostsList from './';

import { SORT_BY_DATE, SORT_BY_VOTE_SCORE } from '../../utils/sort-methods';
import PostMock from '../../testHelpers/mocks/posts';

describe('PostsList', () => {
  const initialProps = {
    posts: [
      PostMock.posts[0],
      PostMock.posts[1]
    ],
    modifyPostVoteValues: jest.fn(),
    sortMethod: SORT_BY_DATE,
    editPost: jest.fn(),
    deletePost: jest.fn()
  };

  it('matches the snapshot', () => {
    const wrapper = shallow(<PostsList {...initialProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should order the posts by date desc', () => {
    const wrapper = shallow(<PostsList {...initialProps} />);

    const postsRow = wrapper.find('PostRow');

    expect(postsRow.get(0).props.post.timestamp)
      .toBeGreaterThan(postsRow.get(1).props.post.timestamp);
  });

  it('should order the posts by voteScore desc', () => {
    const alteredProps = {
      ...initialProps,
      sortMethod: SORT_BY_VOTE_SCORE,
    }

    const wrapper = shallow(<PostsList {...alteredProps} />);

    const postsRow = wrapper.find('PostRow');

    expect(postsRow.get(0).props.post.voteScore)
      .toBeGreaterThan(postsRow.get(1).props.post.voteScore);
  });
});
