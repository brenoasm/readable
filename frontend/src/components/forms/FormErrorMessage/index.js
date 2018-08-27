import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  errors: []
};

const StyledFormErrorMessage = styled.div`
  span {
    color: #fe0303;
  }
`;

const FormErrorMessage = ({ errors }) => (
  <StyledFormErrorMessage>
    {errors && errors.map(error => (
      <span>{error}</span>
    ))}
  </StyledFormErrorMessage>
);

FormErrorMessage.propTypes = propTypes;
FormErrorMessage.defaultProps = defaultProps;

export default FormErrorMessage;
