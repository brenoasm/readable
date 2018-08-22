import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

import { colors } from '../../theme';

const StyledModal = styled.div`
  display: ${props => props.show ? "block" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;

  & > div {
    z-index: 999;
    box-shadow: 0 3px 10px ${colors.black};
    position: fixed;
    background: ${colors.white};
    width: 60%;
    padding: 10px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    div:first-child {

    }

    div:nth-child(2) {
      min-height: 100px;
      margin: 5px;
    }

    div:last-child {
      border-top: 1px solid rgba(0, 0, 0, .15);
      height: 70px;
      padding: 10px;
      display: flex;
      justify-content: flex-end;

      button {
        margin: 5px 10px 0px 15px;
      }
    }
  }

`;

const Modal = ({
  handleClose,
  handleSubmit,
  show,
  children
}) => (
  // <StyledModal show={show} onClick={() => handleClose()}>
  <StyledModal show={true}>
    <div>
      <div></div>
      <div>
        {children}
      </div>
      <div>
        <Button
          handleClick={() => handleClose()}
          type="button"
          text="Cancelar" />
        <Button
          handleClick={() => handleSubmit()}
          type="button"
          text="Concluir" />
      </div>
    </div>
  </StyledModal>
);

export default Modal;
