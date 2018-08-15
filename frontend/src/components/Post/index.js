import React from 'react';
import styled from 'styled-components';

import { convertDate } from '../../utils/converters';
import { colors } from '../../theme';

const StyledPost = styled.li`
  display: flex;
  box-shadow: 0 4px 5px ${colors.primary.primaryTwo};
  background-color: ${colors.primary.primaryFive};
  padding: 10px;
  border-radius: 5px;
  min-height: 135px;
  line-height: 32px;

  div:first-child {
    width: 25%;
    border-right: 1px solid ${colors.black};
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  div:not(:first-child):not(:last-child) {
    padding-left: 25px;
    padding-top: 15px;
    width: 100%;

    i {
      font-size: small;
    }
  }

  div:last-child {
    padding: 15px 25px;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
      font-size: x-large;
      cursor: pointer;
    }
  }

  .title {
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
  }
`;

const Post = ({ post }) => {

  return (
    <StyledPost>
      <div>
        <span>
          <strong>
            {post.author}
          </strong>
        </span>
        <span>
          <small>
            <i title="Data da postagem" className="far fa-calendar"></i> &nbsp;
            {!!post.timestamp && convertDate(post.timestamp, 'DD/MM/YYYY HH:MM')}
          </small>
        </span>
      </div>
      <div>
        <span className="title">
          {post.title}&nbsp;
          <i title="Clique para ver a postagem" className="fas fa-link"></i>
        </span>
        <p>{post.body}</p>
        <span><i title="Quantidade de comentários" className="far fa-comment"></i>&nbsp;
          <small>{post.commentCount}</small>
        </span>
      </div>
      <div>
        <i title="Gostei!" className="fas fa-caret-up"></i>
        <span>
          {post.voteScore}
        </span>
        <i title="Não gostei!" className="fas fa-caret-down"></i>
      </div>
    </StyledPost>
  )
};

export default Post;
