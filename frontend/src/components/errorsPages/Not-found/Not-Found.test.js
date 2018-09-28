/* eslint-disable */

import React from 'react';

import NotFound from './';

test('It matches the snapshot', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});
