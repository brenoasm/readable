import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { setupFormProperties } from '../../../utils/setup-form-properties';
import { isTheFormValid, runValidations } from '../../../utils/validations';

const defaultProps = {
  formProperties: {}
};

const propTypes = {
  children: PropTypes.node.isRequired,
  formProperties: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
  // onPropertyChange: PropTypes.func.isRequired
};

class FormHOC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formProperties: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      formProperties: setupFormProperties(this.props.formProperties)
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.formProperties !== this.props.formProperties) {
      this.setState({
        formProperties: setupFormProperties(this.props.formProperties)
      });
    }
  }

  handleInput(e) {
    const { properties } = this.state.formProperties;

    const value = e.target.value;
    const name = e.target.name;
    const prevProperty = properties[name];

    const errors = runValidations(prevProperty.validations, value);
    const isDirty = prevProperty.originalValue !== value;
    const isValid = errors.length === 0 && isDirty;
    const disabledSubmit = !isTheFormValid(properties, name, isValid);

    this.setState(({ formProperties }) => ({
      formProperties: {
        disabledSubmit,
        properties: {
          ...formProperties.properties,
          [name]: {
            ...prevProperty,
            value: value,
            isDirty,
            errors,
            isValid
          }
        }
      }
    }));
  }

  handleSubmit() {
    const { properties, disabledSubmit } = this.state.formProperties;

    if (disabledSubmit) return false;

    const propertiesToSubmit = Object.keys(properties).reduce(
      (newObj, param) => ({
        ...newObj,
        [param]: properties[param].value
      }),
      {}
    );

    this.props.onSubmit(propertiesToSubmit);
  }

  handleClearForm = () => {
    const { properties } = this.state.formProperties;
    const clearedProperties = Object.keys(properties).reduce(
      (newObj, param) => ({
        ...newObj,
        [param]: {
          ...properties[param],
          value: properties[param].originalValue,
          errors: [],
          isValid: false,
          isDirty: false
        }
      }),
      {}
    );

    this.setState({
      formProperties: {
        disabledSubmit: true,
        properties: clearedProperties
      }
    });
  };

  render() {
    const { handleSubmit, handleClearForm, handleInput, props } = this;
    const { properties, disabledSubmit } = this.state.formProperties;

    return (
      <Fragment>
        {properties &&
          Object.keys(properties).length > 0 &&
          React.cloneElement(props.children, {
            handleSubmit,
            handleClearForm,
            handleInput,
            properties,
            disabledSubmit
          })}
      </Fragment>
    );
  }
}

FormHOC.propTypes = propTypes;
FormHOC.defaultProps = defaultProps;

export default FormHOC;
