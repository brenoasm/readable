import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/index';

const propTypes = {
  handleClick: PropTypes.func.isRequired
};

const BackButton = ({ handleClick }) => (
  <Button text="Voltar" handleClick={handleClick} />
);

BackButton.propTypes = propTypes;

export default BackButton;
