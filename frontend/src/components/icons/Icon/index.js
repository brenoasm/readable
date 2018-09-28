import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

const defaultProps = {
  title: '',
  icon: '',
  onClick: () => {}
};

const Icon = ({
  title,
  icon,
  onClick
}) => (
  <i
    title={title}
    className={icon}
    onClick={() => onClick()}
  />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
