/* eslint-disable */

import React from 'react';

import BackButton from './';

describe('BackButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BackButton handleClick={jest.fn()}/>);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
