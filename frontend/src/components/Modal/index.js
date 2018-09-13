import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { compose } from 'lodash/fp';

import Button from '../buttons/Button';

import { colors } from '../../theme';

const StyledModal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
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
    width: 50%;
    padding: 10px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

      // > div:first-child {
      // }

      // > div:nth-child(2) {
      //   min-height: 100px;
      //   margin: 5px;
      //   padding: 10px;
      // }

      // > div:last-child {
      //   border-top: 1px solid rgba(0, 0, 0, 0.15);
      //   height: 70px;
      //   padding: 10px;
      //   display: flex;
      //   justify-content: flex-end;

      //   button {
      //     margin: 5px 10px 0px 15px;
      //   }
      // }
  }
`;

const Header = (props) => {
  // MOVER ESSES COMPONENTES PARA FORA DESSE ARQUIVO
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
};

class Modal extends Component {
  state = {
    header: Header //AQUI BASICAMENTE É OS METODOS E VARIAVEIS DE CONTROLE DA MODAL, OU TALVEZ NEM ISSO
  }

  static Header = Header; // ESSA LINHA FAZ EU TER ACESSO A UM "SUB-COMPONENTE FORA DO COMPONENTE"

  // state = { header, body, footer, show, modalProps };
  // const composedCancel = compose(
  //   props.handleClose,
  //   props.handleClearForm
  // );

  // const composedSubmit = compose(
  //   composedCancel,
  //   props.handleSubmit
  // );

  render() {
    const { header } = this.state;

    return (
      <StyledModal show={true} onClick={() => {}}>
        <div>
          {this.props.children(header)}
        </div>
      </StyledModal>
    );
  }
};

export default Modal;
