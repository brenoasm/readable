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

const PostRowRating = ({ post, modifyPostVoteValues }) => (
  <StyledPostRowRating>
    <Ratings
      voteScore={post.voteScore}
      rateDown={() => modifyPostVoteValues(post, DOWN_VOTE)}
      rateUp={() => modifyPostVoteValues(post, UP_VOTE)}
    />
  </StyledPostRowRating>
);

export default PostRowRating;
