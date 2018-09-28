import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import PropTypes from 'prop-types';

import PostRow from '../PostRow';

import { SORT_BY_DATE } from '../../utils/sort-methods';

const propTypes = {
  posts: PropTypes.array,
  modifyPostVoteValues: PropTypes.func,
  sortMethod: PropTypes.string,
  editPost: PropTypes.func,
  deletePost: PropTypes.func
};

const defaultProps = {
  posts: [],
  modifyPostVoteValues: () => {},
  sortMethod: SORT_BY_DATE,
  editPost: () => {},
  deletePost: () => {}
};

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

PostsList.propTypes = propTypes;
PostsList.defaultProps = defaultProps;

export default PostsList;
