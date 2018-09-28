import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  rateDown: PropTypes.bool
};

const defaultProps = {
  onClick: () => {},
  title: '',
  rateDown: false,
};

const StyledRateIcon = styled.span`
  font-size: x-large;
  cursor: pointer;
`;

const RateIcon = ({
  onClick,
  rateDown,
  title
}) => (
  <StyledRateIcon>
    <Icon
      title={title}
      onClick={onClick}
      icon={rateDown ? "fas fa-caret-down" : "fas fa-caret-up" }
    />
  </StyledRateIcon>
);

RateIcon.propTypes = propTypes;
RateIcon.defaultProps = defaultProps;

export default RateIcon;
