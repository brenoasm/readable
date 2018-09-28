/* eslint-disable */

import React from 'react';

import Button from './';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
