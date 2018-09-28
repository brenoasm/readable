/* eslint-disable */

import React from 'react';

import RateIcon from './';

describe('RateIcon', () => {
  it('matches the snapshot (rate up)', () => {
    const initialProps = {
      onClick: jest.fn(),
      title: 'Thumbs up!'
    };

    const wrapper = shallow(<RateIcon {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('matches the snapshot (rate down)', () => {
    const initialProps = {
      onClick: jest.fn(),
      rateDown: true,
      title: 'Thumbs down!'
    };

    const wrapper = shallow(<RateIcon {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
