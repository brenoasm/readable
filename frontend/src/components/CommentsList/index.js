import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

import CommentRow from '../CommentRow';

const propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  editClick: PropTypes.func,
  deleteComment: PropTypes.func,
  modifyCommentVoteValues: PropTypes.func
};

const defaultProps = {
  comments: [],
  editClick: () => {},
  deleteComment: () => {},
  modifyCommentVoteValues: () => {}
};

const StyledCommentsList = styled.div`
  ul {
    list-style-type: none;
    padding-left: 0;
  }
`;

const CommentsList = ({
  comments,
  editClick,
  deleteComment,
  modifyCommentVoteValues
}) => {
  const sortedComments =  _.sortBy(comments, comment => comment.voteScore).reverse();

  return (
    <StyledCommentsList>
      {Array.isArray(sortedComments) && (
        <ul>
          {sortedComments.map(comment => (
            <li key={comment.id}>
              <CommentRow
                editClick={editClick}
                deleteComment={deleteComment}
                comment={comment}
                modifyCommentVoteValues={modifyCommentVoteValues} />
            </li>
          ))}
        </ul>
      )}
    </StyledCommentsList>
  )
};

CommentsList.propTypes = propTypes;
CommentsList.defaultProps = defaultProps;

export default CommentsList;
