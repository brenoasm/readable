import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/index';

const propTypes = {
  handleClick: PropTypes.func.isRequired
};

const NewPostButton = ({ handleClick }) => (
  <Button text="Adicionar Postagem" handleClick={handleClick} />
);

NewPostButton.propTypes = propTypes;

export default NewPostButton;
