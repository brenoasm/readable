/* eslint-disable */

import React from 'react';

import EditIcon from './';

describe('EditIcon', () => {
  it('matches the snapshot', () => {
    const initialProps = {
      title: 'Edit teste',
      objectToEdit: {},
      handleEdit: jest.fn()
    };

    const wrapper = shallow(<EditIcon {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
