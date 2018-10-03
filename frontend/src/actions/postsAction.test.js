/* eslint-disable */

import moxios from 'moxios';

import * as actions from './postsAction';
import * as types from './';

import PostMock from '../testHelpers/mocks/posts';
import CategoryMock from '../testHelpers/mocks/categories';
import CommentMock from '../testHelpers/mocks/comments';

describe('PostsAction', () => {
  let store;

  const posts = PostMock.posts;
  const categories = CategoryMock.categories;
  const comments = CommentMock.comments;

  beforeEach(() => {
    store = mockStore({});

    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it(`creates the CREATE_POST correctly after submitPost its done`, () => {
    const newPost = {
      ...posts[0],
      id: null,
      timestamp: null
    };

    const newPostAfterSubmit = {
      ...newPost,
      id: '99',
      timestamp: 1538419906880
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: newPostAfterSubmit
      });
    });

    const expectedActions = [
      { type: types.CREATE_POST, payload: newPostAfterSubmit }
    ];

    store.dispatch(actions.submitPost(newPost)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates the UPDATE_POST correctly after submitPost its done`, () => {
    const updatedPost = {
      ...posts[0],
      body: 'Testing update'
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: updatedPost
      });
    });

    const expectedActions = [{ type: types.UPDATE_POST, payload: updatedPost }];

    store.dispatch(actions.submitPost(posts[0])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates the HANDLE_POSTS correctly after the getCategoryPosts its done`, () => {
    const categorizedPosts = [posts[0]];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        state: 200,
        response: categorizedPosts
      });
    });

    const expectedActions = [
      { type: types.HANDLE_POSTS, payload: categorizedPosts }
    ];

    store.dispatch(actions.getCategoryPosts(categories[1])).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates the HANDLE_POSTS correctly after getAllPosts its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        state: 200,
        response: posts
      });
    });

    const expectedActions = [{ type: types.HANDLE_POSTS, payload: posts }];

    store.dispatch(actions.getAllPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates the UPDATE_POST correctly after the modifyPostvoteValues its done`, () => {
    const updatedPost = {
      ...posts[0]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: updatedPost
      });
    });

    const expectedActions = [{ type: types.UPDATE_POST, payload: updatedPost }];

    store
      .dispatch(actions.modifyPostVoteValues(posts[0], 'testing'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it(`creates the HANDLE_GET_COMMENTS and HANDLE_POST correctly after the
    modifyPostvoteValues its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: posts[0]
      });
    });

    const expectedActions = [
      {
        type: types.HANDLE_COMMENTS,
        payload: [comments[0], comments[1]]
      },
      {
        type: types.HANDLE_POST,
        payload: posts[0]
      }
    ];

    store.dispatch(actions.handleGetPost(posts[0].id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates the DELETE_POST correctly after the deletePost its done`, () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200
      });
    });

    const expectedActions = [
      {
        type: types.DELETE_POST,
        payload: posts[0].id
      }
    ];

    store.dispatch(actions.deletePost(posts[0].id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`creates CHANGE_COMMENT_COUNT correctly`, () => {
    const expectedActions = [
      { type: types.CHANGE_COMMENTS_COUNT, payload: 'testing' }
    ];

    store.dispatch(actions.changeCommentsCount('testing'));

    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`creates DELETE_POST correctly`, () => {
    const expectedActions = [{ type: types.DELETE_POST, payload: posts[0] }];

    store.dispatch(actions.handleDeletePost(posts[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`creates HANDLE_POST correctly`, () => {
    const expectedActions = [{ type: types.HANDLE_POST, payload: posts[0] }];

    store.dispatch(actions.handlePost(posts[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`creates HANDLE_POSTS correctly`, () => {
    const alteredPosts = [posts[0], posts[1]];

    const expectedActions = [
      {
        type: types.HANDLE_POSTS,
        payload: alteredPosts
      }
    ];

    store.dispatch(actions.handlePosts(alteredPosts));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`creates EDIT_POST correctly`, () => {
    const expectedActions = [{ type: types.EDIT_POST, payload: posts[0] }];

    store.dispatch(actions.editPost(posts[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`creates CREATE_POST correctly`, () => {
    const expectedActions = [{ type: types.CREATE_POST, payload: posts[0] }];

    store.dispatch(actions.createPost(posts[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it(`creates UPDATE_POST correctly`, () => {
    const expectedActions = [{ type: types.UPDATE_POST, payload: posts[0] }];

    store.dispatch(actions.updatePost(posts[0]));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
