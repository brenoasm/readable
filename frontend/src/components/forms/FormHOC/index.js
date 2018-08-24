import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { setupFormProperties } from '../../../utils/setup-form-properties';

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
      formProperties: setupFormProperties(props.formProperties)
    };
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
        formIsValid: errors.length > 0, // Pode-se usar o isDirty também para validar o form
        [name]: {
          ...prevProperty,
          value: value,
          isDirty: prevProperty.value !== value,
          errors
        }
      }
    }));
  };

  handleSubmit = () => {
    //passar do container e mapear as props do form para chave/valor

    this.props.onSubmit('Valor a enviar para o container');
  };

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

    return (
      <Fragment>
        {React.cloneElement(props.children, {
          handleSubmit,
          handleClearForm,
          handleInput
        })}
      </Fragment>
    );
  }
}

FormHOC.propTypes = propTypes;
FormHOC.defaultProps = defaultProps;

export default FormHOC;
