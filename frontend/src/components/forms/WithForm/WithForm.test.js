/* eslint-disable */

import React from 'react';

import WithForm from './';

describe('WithForm', () => {
  const Children = () => (
    <div>
      <span>Testing</span>
    </div>
  );

  const initialProps = {
    onSubmit: jest.fn(),
    formProperties: {
      title: {
        validations: [],
        isFormField: true,
        isValid: null
      },
      body: {
        validations: [],
        isFormField: true,
        isValid: null
      }
    }
  };

  const initialState = {
    disabledSubmit: true,
    properties: {
      body: {
        errors: [],
        isDirty: false,
        isFormField: true,
        isValid: false,
        name: 'body',
        originalValue: '',
        validations: [],
        value: ''
      },
      title: {
        errors: [],
        isDirty: false,
        isFormField: true,
        isValid: false,
        name: 'title',
        originalValue: '',
        validations: [],
        value: ''
      }
    }
  };

  it('mounts the component', () => {
    const wrapper = mount(
      <WithForm {...initialProps}>
        <Children />
      </WithForm>
    );

    expect(wrapper).toHaveLength(1);
  });

  it('set the state correctly', () => {
    const wrapper = mount(
      <WithForm {...initialProps}>
        <Children />
      </WithForm>
    );

    expect(wrapper.state()).toEqual({
      formProperties: initialState
    });
  });

  it('handle input changes correctly', () => {
    const valueToSet = 'testing one two three';

    const wrapper = mount(
      <WithForm {...initialProps}>
        <Children />
      </WithForm>
    );

    const alteredState = {
      disabledSubmit: true,
      properties: {
        ...initialState.properties,
        title: {
          ...initialState.properties.title,
          value: valueToSet,
          isDirty: true,
          isValid: true,
          errors: []
        }
      }
    };

    wrapper.instance().handleInput({
      target: {
        name: 'title',
        value: valueToSet
      }
    });

    expect(wrapper.state()).toEqual({
      formProperties: alteredState
    });
  });

  it('handle clearForm correctly', () => {
    const alteredProps = {
      formProperties: {
        title: {
          validations: [],
          isFormField: true,
          isValid: null,
          value: 'test'
        },
        body: {
          validations: [],
          isFormField: true,
          isValid: null,
          value: 'testing 1'
        }
      }
    };

    const wrapper = mount(
      <WithForm {...alteredProps}>
        <Children />
      </WithForm>
    );

    wrapper.instance().handleClearForm();

    expect(wrapper.state()).toEqual({
      formProperties: initialState
    });
  });

  it('handle submit correctly', () => {
    const valueToSet = 'testing one two three';

    const alteredProps = {
      onSubmit: jest.fn(),
      formProperties: {
        title: {
          validations: [],
          isFormField: true,
          isValid: null,
          value: 'test'
        },
        body: {
          validations: [],
          isFormField: true,
          isValid: null,
          value: 'testing 1'
        }
      }
    };

    const wrapper = mount(
      <WithForm {...alteredProps}>
        <Children />
      </WithForm>
    );

    wrapper.instance().handleInput({
      target: {
        name: 'title',
        value: valueToSet
      }
    });

    wrapper.instance().handleInput({
      target: {
        name: 'body',
        value: valueToSet
      }
    });

    wrapper.instance().handleSubmit();

    expect(alteredProps.onSubmit).toHaveBeenCalled();
  });
});
