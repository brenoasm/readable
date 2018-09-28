import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

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
    <Icon
      title={title}
      icon="fas fa-pen"
      onClick={() => handleEdit(objectToEdit)}
    />
  </StyledEditIcon>
);

EditIcon.propTypes = propTypes;
EditIcon.defaultProps = defaultProps;

export default EditIcon;
