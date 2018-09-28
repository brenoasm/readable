/* eslint-disable */

import React from 'react';

import PostDetail from './';

describe('PostDetail', () => {
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
      comments: [
        {
          id: '894tuq4ut84ut8v4t8wun89g',
          parentId: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468166872634,
          body: 'Hi there! I am a COMMENT.',
          author: 'thingtwo',
          voteScore: 6,
          deleted: false,
          parentDeleted: false
        },
        {
          id: '8tu4bsun805n8un48ve89',
          parentId: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1469479767190,
          body: 'Comments. Are. Cool.',
          author: 'thingone',
          voteScore: -5,
          deleted: false,
          parentDeleted: false
        }
      ],
      modifyPostVoteValues: jest.fn(),
      deletePost: jest.fn(),
      editPost: jest.fn(),
      showModal: jest.fn(),
      editClick: jest.fn(),
      modifyCommentVoteValues: jest.fn(),
      deleteComment: jest.fn(),
      history: {
        push: jest.fn()
      }
    };

    const wrapper = shallow(<PostDetail {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not render the component if a post is not passed', () => {
    const wrapper = shallow(<PostDetail />);

    expect(wrapper.find('Fragment').prop('children')).toBeNull();
  });

  it('should not have a CommentsList component if comments is not passed', () => {
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
    };

    const wrapper = shallow(<PostDetail {...initialProps} />);

    expect(wrapper.find('CommentsList')).toHaveLength(0);
  });
});
