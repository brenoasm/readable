/* eslint-disable */

import React from 'react';

import CategoryList from './';

describe('CategoryList', () => {
  let wrapper;

  beforeEach(() => {
    const categories = [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      }
    ]

    wrapper = shallow(<CategoryList categories={categories} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('renders three children', () => {
    expect(wrapper.children().length).toEqual(3); // Categorias + o Home que é fixo
  })
});
