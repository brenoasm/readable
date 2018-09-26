import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import PostRow from '../PostRow';

import { SORT_BY_DATE } from '../../utils/sort-methods';

const StyledPostsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;

  li {
    margin: 10px;
  }
`;

const PostsList = ({
  posts,
  modifyPostVoteValues,
  sortMethod,
  editPost,
  deletePost }) => {
  const orderedPosts =
    sortMethod === SORT_BY_DATE
      ? _.sortBy(posts, post => post.timestamp).reverse()
      : _.sortBy(posts, post => post.voteScore).reverse();

  return (
    <StyledPostsList>
      {Array.isArray(orderedPosts) &&
        orderedPosts.map(post => (
          <li key={post.id}>
            <PostRow
              modifyPostVoteValues={modifyPostVoteValues}
              post={post}
              editPost={editPost}
              deletePost={deletePost} />
          </li>
        ))}
    </StyledPostsList>
  );
};

export default PostsList;
