/* eslint-disable */

import React from 'react';

import FormErrorMessage from './';

describe('FormErrorMessage', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      errors: [
        'Erro ao preencher campo'
      ]
    };

    wrapper = shallow(<FormErrorMessage {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have span length equals to initialState errors', () => {
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
