import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Ratings from '../../Ratings';

import { colors } from '../../../theme';
import { UP_VOTE, DOWN_VOTE } from '../../../utils/ratings';

const propTypes = {
  comment: PropTypes.object,
  modifyCommentVoteValues: PropTypes.func
};

const defaultProps = {
  comment: {},
  modifyCommentVoteValues: () => {}
};

const StyledCommentRowBody = styled.div`
  display: flex;
  height: 100px;
  margin-top: 10px;

  > div:first-child {
    border-radius: 5px
    padding: 8px;
    overflow-y: auto;
    box-shadow: 0 3px 5px ${colors.primary.primaryFour};
    background-color: ${colors.white};
    flex-grow: 10;

    p {
      line-height: 0.5;
    }
  }

  > div:last-child {
    text-align: center;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CommentRowBody = ({
  comment,
  modifyCommentVoteValues
}) => (
  <StyledCommentRowBody>
    <div>
      <p>{comment.body}</p>
    </div>
    <div>
      <Ratings
        voteScore={comment.voteScore}
        rateUp={() => modifyCommentVoteValues(comment, UP_VOTE)}
        rateDown={() => modifyCommentVoteValues(comment, DOWN_VOTE)}
      />
    </div>
  </StyledCommentRowBody>
);

CommentRowBody.propTypes = propTypes;
CommentRowBody.defaultProps = defaultProps;

export default CommentRowBody;
