import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

const ModalContents = ({ children, ...rest }) => {
  return (
    <div>
      {(Array.isArray(children) || children)
        && React.Children.map(children, child =>
          React.cloneElement(child, {...rest}))
      }
    </div>
  );
};

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
  }
`;

class Modal extends Component {
  state = {};

  static Header = ModalContents;
  static Body = ModalContents;
  static Footer = ModalContents;

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
    // Passar o visible e os eventos

    return (
      <StyledModal
        show={true}
        onClick={() => {}}
        className={this.props.className}>
        <div>
          {this.props.children()}
        </div>
      </StyledModal>
    );
  }
};

export default Modal;
