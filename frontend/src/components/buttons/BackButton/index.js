import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/index';

const propTypes = {
  handleClick: PropTypes.func.isRequired
};

const defaultProps = {
  handleClick: () => {}
};

const BackButton = ({ handleClick }) => (
  <Button text="Voltar" handleClick={handleClick} />
);

BackButton.propTypes = propTypes;
BackButton.defaultProps = defaultProps;

export default BackButton;
