import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { setupFormProperties } from '../../../utils/setup-form-properties';
import { getRandomId } from '../../../utils/unique-key-generator';

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
  }

  componentDidMount() {
    this.setState({
      formProperties: setupFormProperties(this.props.formProperties)
    });
  }

  handleInput = e => {
    //passar do container uma função e chamar ela com o resultado desta
    const value = e.target.value;
    const name = e.target.name;
    const prevProperty = this.state.formProperties[name];
    const errors = prevProperty.validations.map(validation =>
      validation(value)
    );

    this.setState(prevState => ({
      formProperties: {
        ...prevState.formProperties,
        formIsValid: errors.length === 0, // Pode-se usar o isDirty também para validar o form
        [name]: {
          ...prevProperty,
          value: value,
          isDirty: prevProperty.value !== value,
          errors
        }
      }
    }));
  };

  handleSubmit() {
    const { formProperties } = this.state;
    const min = 0;
    const max = 1000;

    debugger
    if (!formProperties.formIsValid) return false;

    const propertiesToSubmit = Object.keys(formProperties).map(param => {
      const timestamp = Date.now();
      const property = this.state.formProperties[param];

      return {
        ...propertiesToSubmit,
        [param]: property.value,
        timestamp,
        id: getRandomId(min, max, String(timestamp).substring(0, 4)),
      }
    });

    this.props.onSubmit(propertiesToSubmit);
  }

  handleClearForm = () => {
    const clearedFormProps = Object.keys(this.state.formProperties).map(
      propName => {
        const prop = this.state.formProperties[propName];

        return {
          ...prop,
          value: '',
          errors: []
        };
      }
    );

    this.setState({ formProperties: clearedFormProps, formIsValid: false });
  };

  render() {
    const { handleSubmit, handleClearForm, handleInput, props } = this;
    const { formProperties } = this.state;

    return (
      <Fragment>
        {Object.keys(formProperties).length > 0 &&
          React.cloneElement(props.children, {
            handleSubmit,
            handleClearForm,
            handleInput,
            formProperties
          })}
      </Fragment>
    );
  }
}

FormHOC.propTypes = propTypes;
FormHOC.defaultProps = defaultProps;

export default FormHOC;
