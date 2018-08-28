import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditIcon from '../../icons/EditIcon';

const StyledPostRowTitle = styled.div`
  i {
    font-size: small;
  }

  a {
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
  }

  div {
    display: flex;

    span:last-child {
      margin-left: auto;
    }
  }
`;

const PostRowTitle = ({ post, editPost }) => (
  <StyledPostRowTitle>
    <Link to={`/posts/${post.id}`}>
      {post.title}
      &nbsp;
      <i title="Clique para ver a postagem" className="fas fa-link" />
    </Link>
    <p>{post.body}</p>
    <div>
      <span>
        <i title="Quantidade de comentários" className="far fa-comment" />
        &nbsp;
        <small>{post.commentCount}</small>
      </span>
      <EditIcon
        handleEdit={editPost}
        objectToEdit={post}
        title="Editar esse comentário"
      />
    </div>
  </StyledPostRowTitle>
);

export default PostRowTitle;
