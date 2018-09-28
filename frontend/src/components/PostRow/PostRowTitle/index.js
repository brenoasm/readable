import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import EditIcon from '../../icons/EditIcon';
import DeleteIcon from '../../icons/DeleteIcon';

const propTypes = {
  post: PropTypes.object,
  editPost: PropTypes.func,
  deletePost: PropTypes.func
};

const defaultProps = {
  post: {
    title: '',
    body: '',
    commentCount: 0,
    id: ''
  },
  editPost: () => {},
  deletePost: () => {}
};

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

    > div {
      margin-left: auto;

      span {
        margin-left: 10px;
      }
    }
  }
`;

const PostRowTitle = ({ post, editPost, deletePost }) => (
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
      <div>
        {editPost && (
          <EditIcon
            handleEdit={editPost}
            objectToEdit={post}
            title="Editar esse post"
          />
        )}
        {deletePost && (
          <DeleteIcon
            handleDelete={deletePost}
            objectToDelete={post}
            title="Remover esse post"
          />
        )}
      </div>
    </div>
  </StyledPostRowTitle>
);

PostRowTitle.propTypes = propTypes;
PostRowTitle.defaultProps = defaultProps;

export default PostRowTitle;
