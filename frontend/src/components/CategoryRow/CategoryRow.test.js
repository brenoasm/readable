/* eslint-disable */

import React from 'react';

import CategoryRow from './';

import CategoryMock from '../../testHelpers/mocks/categories';

describe('CategoryRow', () => {


  it('matches the snapshot', () => {
    const initialState = {
      category: CategoryMock.categories[0],
      activeRoute: '/redux'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should be the active route', () => {
    const initialState = {
      category: CategoryMock.categories[1],
      activeRoute: '/redux'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper.hasClass('active')).toEqual(true);
  })

  it('should not be the active route', () => {
    const initialState = {
      category: CategoryMock.categories[1],
      activeRoute: '/react'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper.hasClass('active')).toEqual(false);
  })
});
