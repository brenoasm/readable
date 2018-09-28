/* eslint-disable */

import React from 'react';

import NewPostButton from './';

describe('NewPostButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NewPostButton handleClick={jest.fn()} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
