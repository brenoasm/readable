import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../../theme';

const ModalContents = ({ children, ...rest }) => (
  <div>
    {(Array.isArray(children) || children)
      && React.Children.map(children, child =>
        React.cloneElement(child, {...rest}))
    }
  </div>
);

const propTypes = {
  show: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  show: false,
  handleClick: () => {},
  children: () => {},
  className: ''
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

  render() {
    const {
      show,
      handleClick,
      children,
      className } = this.props;

    return (
      <StyledModal
        show={show}
        onClick={() => handleClick()}
        className={className}>
        <div onClick={(e) => e.stopPropagation()}>
          {children(this.props)}
        </div>
      </StyledModal>
    );
  }
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
