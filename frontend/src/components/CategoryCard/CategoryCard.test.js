/* eslint-disable */

import React from 'react';

import CategoryCard from './';

import CategoryMock from '../../testHelpers/mocks/categories';

describe('CategoryCard', () => {
  let wrapper;

  beforeEach(() => {
    const category = CategoryMock.categories[0];

    wrapper = shallow(<CategoryCard category={category} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
