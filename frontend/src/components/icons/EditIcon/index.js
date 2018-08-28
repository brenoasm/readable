import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  handleEdit: PropTypes.func.isRequired,
  objectToEdit: PropTypes.object,
  title: PropTypes.string
};

const defaultProps = {
  handleEdit: () => {},
  objectToEdit: {},
  title: ''
};

const StyledEditIcon = styled.span`
  cursor: pointer;
`;

const EditIcon = ({ handleEdit, objectToEdit, title }) => (
  <StyledEditIcon>
    <i
      title={title}
      className="fas fa-pen"
      onClick={() => handleEdit(objectToEdit)}
    />
  </StyledEditIcon>
);

EditIcon.propTypes = propTypes;
EditIcon.defaultProps = defaultProps;

export default EditIcon;
