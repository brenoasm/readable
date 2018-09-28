/* eslint-disable */

import React from 'react';

import Select from './';

describe('Select', () => {
  it('matches the snapshot', () => {
    const initialState = {
      name: 'category',
      title: 'categories',
      value: 'redux',
      id: 'category',
      handleChange: jest.fn(),
      errors: [],
      options: [
        {
          label: 'react',
          value: 'react'
        },
        {
          label: 'redux',
          value: 'redux'
        },
        {
          label: 'udacity',
          value: 'udacity'
        }
      ]
    };

    const wrapper = shallow(<Select {...initialState}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('shows a title when the property is passed', () => {
    const initialState = {
      title: 'categories'
    };

    const wrapper = shallow(<Select {...initialState}/>);

    expect(wrapper.find('label').text()).toBe(initialState.title);
  });

  it('should have a FormErrorMessage', () => {
    const initialState = {
      errors: [
        'Erro ao escolher opção'
      ],
    };

    const wrapper = shallow(<Select {...initialState}/>);

    expect(wrapper.find('FormErrorMessage')).toHaveLength(1);
  });

  it('trigger the handleChange event when the value changes', () => {
    const initialState = {
      handleChange: jest.fn(),
      options: [
        {
          label: 'react',
          value: 'react'
        },
        {
          label: 'redux',
          value: 'redux'
        },
        {
          label: 'udacity',
          value: 'udacity'
        }
      ]
    };

    const wrapper = shallow(<Select {...initialState}/>);

    wrapper.find('select').simulate('change', { target: { value: 'react' }});

    expect(initialState.handleChange).toHaveBeenCalled();
  });
});
