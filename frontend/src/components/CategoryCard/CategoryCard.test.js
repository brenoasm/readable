/* eslint-disable */

import React from 'react';

import CategoryCard from './';

describe('CategoryCard', () => {
  let wrapper;

  beforeEach(() => {
    const category = {
      name: 'redux',
      path: 'redux'
    };

    wrapper = shallow(<CategoryCard category={category} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
