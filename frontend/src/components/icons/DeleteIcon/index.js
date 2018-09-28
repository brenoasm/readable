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

const DeleteIcon = ({ handleDelete, objectToDelete, title }) => (
  <StyledEditIcon>
    <i
      title={title}
      className="fas fa-trash"
      onClick={() => handleDelete(objectToDelete)}
    />
  </StyledEditIcon>
);

DeleteIcon.propTypes = propTypes;
DeleteIcon.defaultProps = defaultProps;

export default DeleteIcon;
