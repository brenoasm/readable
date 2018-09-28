/* eslint-disable */

import React from 'react';

import PostForm from './';

describe('PostForm', () => {
  const initialState = {
    properties: {
      id: {
        isFormField: false,
        value: '',
        originalValue: '',
        isDirty: false,
        isValid: false,
        errors: [],
        name: 'id'
      },
      timestamp: {
        isFormField: false,
        value: '',
        originalValue: '',
        isDirty: false,
        isValid: false,
        errors: [],
        name: 'timestamp'
      },
      title: {
        validations: [],
        isFormField: true,
        isValid: false,
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'title'
      },
      body: {
        validations: [],
        isFormField: true,
        isValid: false,
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'body'
      },
      author: {
        validations: [],
        isFormField: true,
        isValid: false,
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'author'
      },
      category: {
        validations: [],
        isFormField: true,
        isValid: false,
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
        ],
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'category'
      }
    }
  };

  const mountedWrapper = mount(<PostForm {...initialState} />);

  const names = mountedWrapper
      .find('input')
      .reduce((total, value) => [...total, value.prop('name')], []);

  it('matches the snapshot', () => {
    const wrapper = shallow(<PostForm {...initialState} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should a input of name author', () => {
    expect(names).toContain('author');
  });

  it('should a input of name title', () => {
    expect(names).toContain('title');
  });

  it('should a select of name category', () => {
    expect(mountedWrapper.find('select').prop('name')).toBe('category');
  });

  it('should a textarea of name body', () => {
    expect(mountedWrapper.find('textarea').prop('name')).toBe('body');
  });
});
