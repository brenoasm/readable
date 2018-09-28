import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Ratings from '../../Ratings';

import { UP_VOTE, DOWN_VOTE } from '../../../utils/ratings';

const propTypes = {
  post: PropTypes.object,
  modifyCommentVoteValues: PropTypes.func
};

const defaultProps = {
  post: {
    voteScore: 0
  },
  modifyCommentVoteValues: () => {}
};

const StyledPostRowRating = styled.div`
  i {
    font-size: x-large;
    cursor: pointer;
  }
`;

const PostRowRating = ({ post, modifyPostVoteValues }) => (
  <StyledPostRowRating>
    <Ratings
      voteScore={post.voteScore}
      rateDown={() => modifyPostVoteValues(post, DOWN_VOTE)}
      rateUp={() => modifyPostVoteValues(post, UP_VOTE)}
    />
  </StyledPostRowRating>
);

PostRowRating.propTypes = propTypes;
PostRowRating.defaultProps = defaultProps;

export default PostRowRating;
