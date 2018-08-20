import React from 'react';
import styled from 'styled-components';

import Post from '../PostRow';

const StyledPostsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;

  li {
    margin: 10px;
  }
`;

const PostsList = ({ posts, modifyVotes }) => (
  <StyledPostsList>
    {Array.isArray(posts) && posts.map(post => (
      <Post modifyVotes={modifyVotes} key={post.id} post={post} />
    ))}
  </StyledPostsList>
);

export default PostsList;
