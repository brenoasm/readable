import React from 'react';
import styled from 'styled-components';

import Ratings from '../../Ratings';

import { UP_VOTE, DOWN_VOTE } from '../../../utils/ratings';

const StyledPostRowRating = styled.div`
  i {
    font-size: x-large;
    cursor: pointer;
  }
`;

const PostRowRating = ({ post, modifyVotes }) => (
  <StyledPostRowRating>
    <Ratings
      voteScore={post.voteScore}
      rateDown={() => modifyVotes(post, DOWN_VOTE)}
      rateUp={() => modifyVotes(post, UP_VOTE)}
    />
  </StyledPostRowRating>
);

export default PostRowRating;
