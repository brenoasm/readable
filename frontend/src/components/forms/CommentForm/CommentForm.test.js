/* eslint-disable */

import React from 'react';

import CommentForm from './';

describe('CommentForm', () => {
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
      parentId: {
        isFormField: false,
        value: '8xf0y6ziyjabvozdd253nd',
        originalValue: '',
        isDirty: false,
        isValid: false,
        errors: [],
        name: 'parentId'
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
      body: {
        validations: [null],
        isFormField: true,
        isValid: false,
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'body'
      },
      author: {
        validations: [null],
        isFormField: true,
        isValid: false,
        value: '',
        originalValue: '',
        isDirty: false,
        errors: [],
        name: 'author'
      }
    },
    disabledSubmit: false
  };
  const mountedWrapper = mount(<CommentForm {...initialState} />);

  it('matches the snapshot', () => {
    const wrapper = shallow(<CommentForm {...initialState}/>);

    expect(wrapper).toMatchSnapshot();
  });

  // Da pra testar com integração se as regras do form estão funcionando

  it('should have a input to author', () => {
    expect(mountedWrapper.find('input').prop('name')).toBe('author');
  });

  it('should have a input to body', () => {
    expect(mountedWrapper.find('textarea').prop('name')).toBe('body');
  });

  it('should have a button cancel', () => {
    expect(mountedWrapper.find('button').get(0).props.children).toBe('Cancelar');
  });

  it('should have a button Salvar', () => {
    expect(mountedWrapper.find('button').get(1).props.children).toBe('Salvar');
  });
});
