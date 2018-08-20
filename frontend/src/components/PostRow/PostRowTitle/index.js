import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledPostRowTitle = styled.div`
  a {
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
  }

  i {
    font-size: small;
  }
`;

const PostRowTitle = ({ post }) => (
  <StyledPostRowTitle>
    <Link to="/">
      {post.title}&nbsp;
      <i title="Clique para ver a postagem" className="fas fa-link"></i>
    </Link>
    <p>{post.body}</p>
    <span><i title="Quantidade de comentários" className="far fa-comment"></i>&nbsp;
      <small>{post.commentCount}</small>
    </span>
  </StyledPostRowTitle>
);

export default PostRowTitle;
