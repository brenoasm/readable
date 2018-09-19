import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  handleDelete: PropTypes.func.isRequired,
  objectToDelete: PropTypes.object,
  title: PropTypes.string
};

const defaultProps = {
  handleDelete: () => {},
  objectToDelete: {},
  title: ''
};

const StyledEditIcon = styled.span`
  cursor: pointer;
`;

const EditIcon = ({ handleDelete, objectToDelete, title }) => (
  <StyledEditIcon>
    <i
      title={title}
      className="fas fa-trash"
      onClick={() => handleDelete(objectToDelete)}
    />
  </StyledEditIcon>
);

EditIcon.propTypes = propTypes;
EditIcon.defaultProps = defaultProps;

export default EditIcon;
