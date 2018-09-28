/* eslint-disable */

import React from 'react';

import Input from './';

describe('Input', () => {
  it('matches the snapshot', () => {
    const initialState = {
      name: 'author',
      title: 'author',
      type: 'text',
      value: 'author',
      id: 'author',
      handleChange: jest.fn(),
      placeholder: 'Testando o Input',
      errors: []
    };

    const wrapper = shallow(<Input {...initialState}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('shows a title when the property is passed', () => {
    const initialState = {
      name: 'author',
      title: 'author',
      type: 'text',
      value: 'author',
      id: 'author',
      handleChange: jest.fn(),
      placeholder: 'Testando o Input',
      errors: []
    };

    const wrapper = shallow(<Input {...initialState}/>);

    expect(wrapper.find('label').text()).toBe(initialState.title);
  });

  it('should have one FormErrorMessage', () => {
    const initialState = {
      errors: [
        'Erro ao inserir valor'
      ]
    };

    const wrapper = shallow(<Input {...initialState}/>);

    expect(wrapper.find('FormErrorMessage')).toHaveLength(1);
  });

  it('trigger the handleChange event when the value changes', () => {
    const initialState = {
      handleChange: jest.fn(),
    };

    const wrapper = shallow(<Input {...initialState}/>);

    wrapper.find('input').simulate('change', { target: { value: 'a' }});

    expect(initialState.handleChange).toHaveBeenCalled();
  });

  it('adapts to the parameter Type', () => {
    const initialState = {
      handleChange: jest.fn(),
      type: 'checkbox'
    };

    const wrapper = shallow(<Input {...initialState}/>);

    expect(wrapper.find('input').prop('type')).toBe('checkbox');
  });
});
