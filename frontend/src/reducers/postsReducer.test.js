/* eslint-disable */

import * as types from '../actions';
import PostsReducer, { postsState } from './postsReducer';

import PostMock from '../testHelpers/mocks/posts';

import { ADD } from '../utils/count-modifiers';

describe('PostsReducer', () => {
  const { posts, formProperties } = PostMock;
  it('handle the right InitialState', () => {
    expect(PostsReducer(undefined, {})).toEqual(postsState);
  });

  it('handle CHANGE_COMMENTS_COUNT correctly', () => {
    const existingState = {
      posts: [],
      post: posts[0],
      formProperties
    };

    const action = {
      type: types.CHANGE_COMMENTS_COUNT,
      payload: ADD
    };

    const expectedState = {
      ...existingState,
      post: {
        ...existingState.post,
        commentCount: existingState.post.commentCount + 1
      }
    };

    expect(PostsReducer(existingState, action)).toDeepEqual(expectedState);
  });

  it('handle HANDLE_POST correctly', () => {
    const action = {
      type: types.HANDLE_POST,
      payload: posts[0]
    };

    const expectedState = {
      ...postsState,
      post: posts[0]
    };

    expect(PostsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle HANDLE_POSTS correctly', () => {
    const alteredPosts = [
      posts[0],
      posts[1]
    ];

    const action = {
      type: types.HANDLE_POSTS,
      payload: alteredPosts
    };

    const expectedState = {
      ...postsState,
      posts: alteredPosts
    };

    expect(PostsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle UDATE_POST correctly', () => {
    const updatedPost = {
      ...posts[0],
      body: 'testing things'
    };

    const action = {
      type: types.UPDATE_POST,
      payload: updatedPost
    };

    const existingState = {
      ...postsState,
      posts: [
        posts[0],
        posts[1]
      ]
    };

    const expectedState = {
      ...existingState,
      posts: [
        updatedPost,
        posts[1]
      ],
      post: updatedPost
    };

    expect(PostsReducer(existingState, action)).toDeepEqual(expectedState);
  });

  it('handle CREATE_POST correctly', () => {
    const newPost = {
      ...posts[0],
      id: '99',
      timestamp: 1468479767190,
      body: 'testing things 2'
    };

    const action = {
      type: types.CREATE_POST,
      payload: newPost
    };

    const expectedState = {
      ...postsState,
      posts: [
        ...postsState.posts,
        newPost
      ]
    };

    expect(PostsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle EDIT_POST correctly', () => {
    const post = posts[0];

    const action = {
      type: types.EDIT_POST,
      payload: post
    };

    const expectedState = {
      ...postsState,
      formProperties: {
        id: {
          isFormField: false,
          isValid: true,
          value: post.id
        },
        timestamp: {
          isFormField: false,
          isValid: true,
          value: post.timestamp
        },
        title: {
          validations: [() => {}],
          isFormField: true,
          isValid: true,
          value: post.title
        },
        body: {
          validations: [() => {}],
          isFormField: true,
          isValid: true,
          value: post.body
        },
        author: {
          validations: [() => {}],
          isFormField: true,
          isValid: true,
          value: post.author
        },
        category: {
          validations: [() => {}],
          isFormField: true,
          isValid: true,
          value: post.category,
          options: [
            {
              label: '',
              value: ''
            }
          ]
        }
      }
    };

    expect(PostsReducer(undefined, action)).toDeepEqual(expectedState);
  });

  it('handle DELETE_POST correctly', () => {
    const alteredPosts = [
      posts[0],
      posts[1]
    ];

    const action = {
      type: types.DELETE_POST,
      payload: posts[0]
    };

    const existingState = {
      ...postsState,
      posts: alteredPosts
    };

    const expectedState = {
      ...existingState,
      posts: [
        posts[1]
      ]
    };

    expect(PostsReducer(existingState, action)).toDeepEqual(expectedState);
  });
});
