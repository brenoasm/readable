/* eslint-disable */

import React from 'react';

import PostRowTitle from './';

describe('PostRowTitle', () => {
  it('matches the snapshot', () => {
    const initialProps = {
      post: {
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
      },
      editPost: jest.fn(),
      deletePost: jest.fn()
    };

    const wrapper = shallow(<PostRowTitle {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
