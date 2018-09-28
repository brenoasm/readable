/* eslint-disable */

import React from 'react';

import ModalPostForm from './';

describe('ModalPostForm', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<ModalPostForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
