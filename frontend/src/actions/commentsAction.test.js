/* eslint-disable */

import React from 'react';
import moxios from 'moxios';

import * as actions from './commentsAction';
import * as types from './';

import { commentsState } from '../reducers';

import CommentMock from '../testHelpers/mocks/comments';

describe('CommentsAction', () => {
  let store;

  const comments = [

  ];

  beforeEach(() => {
    store = mockStore({ commentsState });

    moxios.install();
  });

  afterEach(() => {
    store = mockStore({});

    moxios.uninstall();
  });

  it('')
});
