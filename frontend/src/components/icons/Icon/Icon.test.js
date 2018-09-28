/* eslint-disable */

import React from 'react';

import Icon from './';

describe('Icon', () => {
  let wrapper;

  const initialProps = {
    title: 'testing icon',
    icon: 'fas fa-caret-down',
    onClick: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<Icon {...initialProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('trigger the onClick function when clicked', () => {
    wrapper.simulate('click');
    expect(initialProps.onClick).toHaveBeenCalled();
  })
});
