import React, { Fragment } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

import PostRowDetail from './PostRowDetail';
import PostRowTitle from './PostRowTitle';
import PostRowRating from './PostRowRating';

const StyledPostRow = styled.div`
  display: flex;
  box-shadow: 0 4px 5px ${colors.primary.primaryTwo};
  background-color: ${colors.primary.primaryFive};
  padding: 10px;
  border-radius: 5px;
  min-height: 135px;
  line-height: 32px;

  & > div:first-child {
    width: 25%;
    border-right: 1px solid ${colors.black};
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  & > div:not(:first-child):not(:last-child) {
    padding-left: 25px;
    padding-top: 15px;
    width: 100%;
  }

  & > div:last-child {
    padding: 15px 25px;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PostRow = ({
  post,
  modifyPostVoteValues,
  editPost,
  deletePost,
  children }) => (
  <Fragment>
    <StyledPostRow>
      <PostRowDetail post={post} />
      <PostRowTitle post={post} editPost={editPost} deletePost={deletePost} />
      <PostRowRating post={post} modifyPostVoteValues={modifyPostVoteValues}/>
    </StyledPostRow>
    <Fragment>
      {children}
    </Fragment>
  </Fragment>
);

export default PostRow;
