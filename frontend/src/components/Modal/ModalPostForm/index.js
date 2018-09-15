import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';

import PostFormContainer from '../../../containers/PostFormContainer';
import Modal from '../../modal';
import WithForm from '../../forms/WithForm'
import PostForm from '../../forms/PostForm';
import Button from '../../buttons/Button';

const propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  disabledSubmit: PropTypes.bool
};

const defaultProps = {
  modalIsVisible: false,
  handleCancel: () => {},
  handleSubmit: () => {},
  disabledSubmit: false
};

const StyledModalPostForm = styled(Modal)`
  & > div {

      > div:first-child {
        min-height: 100px;
        margin: 5px;
        padding: 10px;
      }

      > div:last-child {
        border-top: 1px solid rgba(0, 0, 0, 0.15);
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

const ModalPostForm = ({ modalIsVisible, handleClose }) => (
  <PostFormContainer>
    <WithForm>
      <StyledModalPostForm show={modalIsVisible} handleClick={handleClose}>
        {({properties,
          handleInput,
          handleClearForm,
          handleSubmit,
          disabledSubmit}) => {

            const composedCancel = compose(
              handleClose,
              handleClearForm
            );

            const composedSubmit = compose(
              composedCancel,
              handleSubmit
            );

            return (
              <Fragment>
                <StyledModalPostForm.Body>
                  <PostForm properties={properties} handleInput={handleInput} />
                </StyledModalPostForm.Body>
                <StyledModalPostForm.Footer>
                  <Button
                    handleClick={composedCancel}
                    type="button"
                    text="Cancelar"
                  />
                  <Button
                    handleClick={composedSubmit}
                    type="button"
                    text="Concluir"
                    disabled={disabledSubmit}
                  />
                </StyledModalPostForm.Footer>
              </Fragment>
            )
        }}
      </StyledModalPostForm>
    </WithForm>
  </PostFormContainer>
);

ModalPostForm.propTypes = propTypes;
ModalPostForm.defaultProps = defaultProps;

export default ModalPostForm;
