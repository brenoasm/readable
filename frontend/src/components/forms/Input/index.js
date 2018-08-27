import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormErrorMessage from '../FormErrorMessage';

const defaultProps = {
  name: '',
  title: '',
  className: '',
  type: 'text',
  value: '',
  id: '',
  handleChange: () => {},
  placeholder: '',
  errors: []
};

const propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  id: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string)
};

const StyledInput = styled.div`
  margin: 5px;

  & > label {
    margin-right: 5px;
  }

  & > input {
    border: 2px solid rgb(238, 238, 238);
  }
`;

const Input = ({
  name,
  title,
  className,
  type,
  value,
  id,
  handleChange,
  placeholder,
  errors
}) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{title}</label>
      <input
        className={className}
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <FormErrorMessage errors={errors} />
    </StyledInput>
  )
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
