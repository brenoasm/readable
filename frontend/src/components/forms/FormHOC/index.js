import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { setupFormProperties } from '../../../utils/setup-form-properties';
import { getRandomId } from '../../../utils/unique-key-generator';
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

  componentDidUpdate(prevProps, prevState) {


    if (Object.keys(prevState.formProperties).length > 0) {
      const { category } = prevState.formProperties.properties;

      // Para deixar esse cara genérico vai ser necessário uma refatoração
      // nos componentes pai, talvez criar um HOC só para fazer isso
      if (
        prevProps &&
        category.options !== this.props.formProperties.category.options
      ) {
        this.setState({
          formProperties: {
            ...prevProps.formProperties,
            properties: {
              ...prevState.formProperties.properties,
              category: {
                ...prevState.formProperties.properties.category,
                options: this.props.formProperties.category.options
              }
            }
          }
        });
      }
    }
  }

  handleInput(e) {
    //passar do container uma função e chamar ela com o resultado desta
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

    const min = 0;
    const max = 1000;
    const timestamp = properties.timestamp.value || Date.now();
    const id =
      properties.id.value ||
      getRandomId(min, max, String(timestamp).substring(0, 4));
    let propertiesToSubmit = {};

    Object.keys(properties).forEach(param => {
      const property = properties[param];

      propertiesToSubmit = {
        ...propertiesToSubmit,
        [param]: property.value
      };
    });

    propertiesToSubmit = {
      ...propertiesToSubmit,
      id,
      timestamp
    };

    this.props.onSubmit(propertiesToSubmit);
  }

  handleClearForm = () => {
    const { properties } = this.state.formProperties;
    let clearedProperties = {};

    Object.keys(properties).forEach(param => {
      const property = properties[param];

      clearedProperties = {
        ...clearedProperties,
        [param]: {
          ...property,
          value: property.originalValue,
          errors: [],
          isValid: false,
          isDirty: false
        }
      };
    });

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
