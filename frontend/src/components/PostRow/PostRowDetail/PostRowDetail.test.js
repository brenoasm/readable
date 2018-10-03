/* eslint-disable */

import React from 'react';

import PostRowDetail from './';

import PostMock from '../../../testHelpers/mocks/posts';

describe('PostRowDetail', () => {
  it('matches the snapshot', () => {
    const initialProps = {
      post: PostMock.posts[0]
    };

    const wrapper = shallow(<PostRowDetail {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
