import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../../theme';

import Input from '../Input';
import TextArea from '../TextArea';
import Button from '../../buttons/Button';

const propTypes = {};

const defaultProps = {};

const StyledCommentForm = styled.div`
  background-color: ${colors.primary.primaryFive};
  box-shadow: 0 1px 3px ${colors.primary.primaryThree};
  border-radius: 5px;
  padding: 10px;

  div:first-child {
    display: flex;
  }

  div:last-child {
    display flex;
    justify-content: flex-end;
    margin-top: 5px;

    button:last-child {
      margin-left: 10px;
    }
  }

  .comment {
    display: block;
    margin-top: 10px;
    width: 100%;
    min-height: 70px;
  }
`;

const CommentForm = ({
  handleClearForm,
  handleInput,
  handleSubmit,
  properties,
  disabledSubmit
}) => {
  return (
    <StyledCommentForm>
      <Input
        title="Autor: "
        name={properties.author.name}
        value={properties.author.value}
        errors={properties.author.errors}
        handleChange={handleInput}
      />
      <TextArea
        title="Escreva aqui seu comentário: "
        className="comment"
        name={properties.body.name}
        value={properties.body.value}
        errors={properties.body.errors}
        handleChange={handleInput}
      />
      <div>
        <Button
          handleClick={handleClearForm}
          type="button"
          text="Cancelar"
        />
        <Button
          handleClick={handleSubmit}
          type="button"
          text="Salvar"
          disabled={disabledSubmit}
        />
      </div>
    </StyledCommentForm>
  )
};

CommentForm.propTypes = propTypes;
CommentForm.defaultProps = defaultProps;

export default CommentForm;
