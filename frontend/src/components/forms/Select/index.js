import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormErrorMessage from '../FormErrorMessage';

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.value
  }))
};

const defaultProps = {
  title: '',
  name: '',
  id: '',
  className: '',
  value: '',
  handleChange: () => {},
  options: [],
  errors: []
}

const StyledSelect = styled.div`
  margin: 5px;

  & > label {
    margin-right: 5px;
  }

  & > select {
    min-height: 15px;
    min-width: 120px;
    padding: 1px 0;
    cursor: pointer;
  }
`;

const Select = ({
  title,
  name,
  id,
  className,
  value,
  handleChange,
  options,
  errors
}) => (
  <StyledSelect>
    <label htmlFor={name}>{title}</label>
    <select
      id={id}
      className={className}
      name={name}
      value={value}
      onChange={(event) => handleChange(event)}
    >
      <option key="default" value="">Selecione</option>
      {Array.isArray(options) &&
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
    <FormErrorMessage errors={errors} />
  </StyledSelect>
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
