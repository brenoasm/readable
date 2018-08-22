import React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

const defaultProps = {
  text: 'Button',
  textColor: colors.white,
  color: colors.primary.primaryOne,
  handleClick: () => {},
  type: 'button'
}

const StyledButton = styled.button`
  background-color: ${props => props.color};
  color: ${props => props.textColor};
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
`;

const onClick = (event, fn) => {
  event.stopPropagation();

  fn();
};

const Button = ({ type, textColor, color, handleClick, text }) => (
  <StyledButton
    type={type}
    onClick={(event) => onClick(event, handleClick)}
    textColor={textColor}
    color={color}>
    {text}
  </StyledButton>
);

Button.defaultProps = defaultProps;

export default Button;
