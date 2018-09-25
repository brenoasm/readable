import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EditIcon from '../../icons/EditIcon';
import DeleteIcon from '../../icons/DeleteIcon';

const propTypes = {};

const defaultProps = {};

const StyledCommentRowTitle = styled.div`
  display: flex;

  span:first-child {
    font-weight: 600;
  }

  div {
    margin-left: auto;

    span {
      margin-left: 10px;
    }
  }
`;

const CommentRowTitle = ({
  comment,
  editClick,
  deleteComment
}) => (
  <StyledCommentRowTitle>
    <span>{comment.author}</span>
    <div>
      <EditIcon title="Editar comentário" handleEdit={() => editClick(comment)} />
      <DeleteIcon title="Remover comentário" handleDelete={() => deleteComment(comment.id)} />
    </div>
  </StyledCommentRowTitle>
);

CommentRowTitle.propTypes = propTypes;
CommentRowTitle.defaultProps = defaultProps;

export default CommentRowTitle;
