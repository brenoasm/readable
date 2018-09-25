import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../theme';

import CommentRowTitle from './CommentRowTitle';
import CommentRowBody from './CommentRowBody';

const propTypes = {
  comment: PropTypes.object,
  deleteComment: PropTypes.func,
  editClick: PropTypes.func,
  modifyCommentVoteValues: PropTypes.func
};

const defaultProps = {
  comment: () => {},
  deleteComment: () => {},
  editClick: () => {},
  modifyCommentVoteValues: () => {}
};

const StyledCommentRow = styled.div`
  background-color: ${colors.primary.primaryFive};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

const CommentRow = ({
  comment,
  deleteComment,
  editClick,
  modifyCommentVoteValues
}) => (
  <StyledCommentRow>
    <CommentRowTitle
      comment={comment}
      editClick={editClick}
      deleteComment={deleteComment}
    />
    <CommentRowBody
      comment={comment}
      modifyCommentVoteValues={modifyCommentVoteValues}/>
  </StyledCommentRow>
);

CommentRow.propTypes = propTypes;
CommentRow.defaultProps = defaultProps;

export default CommentRow;
