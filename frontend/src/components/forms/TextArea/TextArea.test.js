/* eslint-disable */

import React from 'react';

import TextArea from './';

describe('TextArea', () => {
  it('matches the snapshot', () => {
    const initialState = {
      name: 'author',
      title: 'author',
      value: 'author',
      id: 'author',
      handleChange: jest.fn(),
      errors: []
    };

    const wrapper = shallow(<TextArea {...initialState}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('shows a title when the property is passed', () => {
    const initialState = {
      title: 'author',
    };

    const wrapper = shallow(<TextArea {...initialState}/>);

    expect(wrapper.find('label').text()).toBe(initialState.title);
  });

  it('should have one FormErrorMessage', () => {
    const initialState = {
      errors: [
        'Erro ao inserir valor'
      ]
    };

    const wrapper = shallow(<TextArea {...initialState}/>);

    expect(wrapper.find('FormErrorMessage')).toHaveLength(1);
  });

  it('trigger the handleChange event when the value changes', () => {
    const initialState = {
      handleChange: jest.fn(),
    };

    const wrapper = shallow(<TextArea {...initialState}/>);

    wrapper.find('textarea').simulate('change', { target: { value: 'a' }});

    expect(initialState.handleChange).toHaveBeenCalled();
  });
});
