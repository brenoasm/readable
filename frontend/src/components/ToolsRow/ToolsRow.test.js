/* eslint-disable */

import React from 'react';

import ToolsRow from './';

describe('ToolsRow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToolsRow />);
  });

  afterEach(() => {
    wrapper.unmount;
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a NewPostButton component', () => {
    expect(wrapper.find('NewPostButton')).toHaveLength(1);
  });
});
