/* eslint-disable */

import React from 'react';

import CategoryList from './';

import CategoryMock from '../../testHelpers/mocks/categories';

describe('CategoryList', () => {
  let wrapper;

  beforeEach(() => {
    const categories = [
      CategoryMock.categories[0],
      CategoryMock.categories[1]
    ]

    wrapper = shallow(<CategoryList categories={categories} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders three children', () => {
    expect(wrapper.children().length).toEqual(3); // Categorias + o Home que é fixo
  });
});
