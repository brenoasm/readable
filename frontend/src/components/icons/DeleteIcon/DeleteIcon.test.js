/* eslint-disable */

import React from 'react';

import DeleteIcon from './';

describe('DeleteIcon', () => {
  it('matches the snapshot', () => {
    const initialProps = {
      title: 'Delete teste',
      objectToDelete: {},
      handleDelete: jest.fn()
    };

    const wrapper = shallow(<DeleteIcon {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
