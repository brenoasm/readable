import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../theme';
import EditIcon from '../icons/EditIcon';

const propTypes = {};

const defaultProps = {};

const StyledCommentRow = styled.div`
  background-color: ${colors.primary.primaryFive};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;

  div:first-child {
    display: flex;

    span:first-child {
      font-weight: 600;
    }

    span:last-child {
      margin-left: auto;
    }
  }

  div:last-child {
    background-color: ${colors.white};
    box-shadow: 0 3px 5px ${colors.primary.primaryFour};
    border-radius: 5px
    padding: 8px;
    margin-top: 10px;
    height: 50px;
    overflow-y: auto;

    p {
      line-height: 0.5;
    }
  }
`;

const CommentRow = ({
  comment
}) => {

  return (
    <StyledCommentRow>
      <div>
        <span>{comment.author}</span>
        <EditIcon title="Editar comentário" handleEdit={() => {}} />
      </div>
      <div>
        <p>{comment.body}</p>
      </div>
    </StyledCommentRow>
  )
};

CommentRow.propTypes = propTypes;
CommentRow.defaultProps = defaultProps;

export default CommentRow;
