/* eslint-disable */

import React from 'react';

import Ratings from './';

describe('Ratings', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper).toMatchSnapshot();
  })
});
