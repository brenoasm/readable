import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormErrorMessage from '../FormErrorMessage';

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string)
};

const defaultProps = {
  title: '',
  name: '',
  id: '',
  className: '',
  handleChange: () => {},
  errors: []
};

const StyledTextArea = styled.div`
  margin: 5px;

  & > label {
    margin-right: 5px;
  }

  & > textarea {
    border: 2px solid rgb(238, 238, 238);
  }
`;

const TextArea = ({
  title,
  name,
  id,
  className,
  value,
  handleChange,
  errors
}) => {
  return (
    <StyledTextArea>
      <label htmlFor={name}>{title}</label>
      <textarea
        name={name}
        className={className}
        id={id}
        onChange={(event) => handleChange(event)}
        value={value}
      />
      <FormErrorMessage errors={errors} />
    </StyledTextArea>
  );
};

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
