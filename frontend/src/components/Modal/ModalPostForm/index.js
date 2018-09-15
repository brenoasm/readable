import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostFormContainer from '../../../containers/PostFormContainer';
import Modal from '../../modal';
import WithForm from '../../forms/WithForm'
import PostForm from '../../forms/PostForm';
import Button from '../../buttons/Button';

const propTypes = {
  modalIsVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  disableSubmit: PropTypes.bool
};

const defaultProps = {
  modalIsVisible: false,
  handleCancel: () => {},
  handleSubmit: () => {},
  disableSubmit: false
};

const Styled = styled(Modal)`
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

const ModalPostForm = ({
  modalIsVisible,
  handleCancel,
  handleSubmit,
  disableSubmit }) => (
  <Styled show={modalIsVisible}>
    {() => (
      <Fragment>
        <PostFormContainer>
          <WithForm>
            <Styled.Body>
              <PostForm />
            </Styled.Body>
            <Styled.Footer>
              <Button
                handleClick={handleCancel}
                type="button"
                text="Cancelar"
              />
              <Button
                handleClick={handleSubmit}
                type="button"
                text="Concluir"
                disabled={disableSubmit}
              />
            </Styled.Footer>
          </WithForm>
        </PostFormContainer>
      </Fragment>
    )}
  </Styled>
);

ModalPostForm.propTypes = propTypes;
ModalPostForm.defaultProps = defaultProps;

export default ModalPostForm;
