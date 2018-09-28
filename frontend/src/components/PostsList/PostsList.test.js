/* eslint-disable */

import React from 'react';

import PostsList from './';

import { SORT_BY_DATE, SORT_BY_VOTE_SCORE } from '../../utils/sort-methods';

describe('PostsList', () => {
  const initialProps = {
    posts: [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body:
          'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
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
