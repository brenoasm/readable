import React from 'react';
import styled from 'styled-components';

const UP_VOTE = 'upVote';
const DOWN_VOTE = 'downVote';

const StyledPostRowRating = styled.div`
  i {
    font-size: x-large;
    cursor: pointer;
  }
`;

const PostRowRating = ({ post, modifyVotes }) => (
  <StyledPostRowRating>
    <i title="Gostei!" onClick={() => modifyVotes(post, UP_VOTE)} className="fas fa-caret-up"></i>
    <span>
      {post.voteScore}
    </span>
    <i title="Não gostei!" onClick={() => modifyVotes(post, DOWN_VOTE)} className="fas fa-caret-down"></i>
  </StyledPostRowRating>
);

export default PostRowRating;
