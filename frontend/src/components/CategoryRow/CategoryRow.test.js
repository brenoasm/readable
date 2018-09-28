/* eslint-disable */

import React from 'react';

import CategoryRow from './';

describe('CategoryRow', () => {


  it('matches the snapshot', () => {
    const initialState = {
      category: {
        name: 'redux',
        path: 'redux'
      },
      activeRoute: '/redux'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should be the active route', () => {
    const initialState = {
      category: {
        name: 'redux',
        path: 'redux'
      },
      activeRoute: '/redux'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper.hasClass('active')).toEqual(true);
  })

  it('should not be the active route', () => {
    const initialState = {
      category: {
        name: 'redux',
        path: 'redux'
      },
      activeRoute: '/react'
    };

    const wrapper = shallow(<CategoryRow {...initialState} />);

    expect(wrapper.hasClass('active')).toEqual(false);
  })
});
