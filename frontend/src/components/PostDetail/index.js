import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import PostRow from '../../components/PostRow';
import NewPostButton from '../../components/buttons/NewPostButton';
import BackButton from '../../components/buttons/BackButton';
import WithForm from '../forms/WithForm';
import CommentFormContainer from '../../containers/CommentFormContainer';
import CommentForm from '../forms/CommentForm';
import CommentsList from '../CommentsList';

const propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
  modifyPostVoteValues: PropTypes.func,
  deletePost: PropTypes.func,
  editPost: PropTypes.func,
  showModal: PropTypes.func,
  editClick: PropTypes.func,
  modifyCommentVoteValues: PropTypes.func,
  deleteComment: PropTypes.func,
  history: PropTypes.object
};

const defaultProps = {
  post: null,
  comments: null,
  modifyPostVoteValues: () => {},
  deletePost: () => {},
  editPost: () => {},
  showModal: () => {},
  editClick: () => {},
  modifyCommentVoteValues: () => {},
  deleteComment: () => {},
  history: {
    push: () => {}
  }
};

const StyledPostDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  > div:first-child {
    display: flex;

    button:last-child {
      margin-left: auto;
    }
  }

  > div {
    margin-top: 10px;
  }
`;

const PostDetail = ({
  post,
  comments,
  modifyPostVoteValues,
  deletePost,
  editPost,
  showModal,
  editClick,
  modifyCommentVoteValues,
  deleteComment,
  history
}) => {
  const composedDeletePost = compose(
    () => history.push('/'),
    () => deletePost(post)
  );

  return (
    <Fragment>
      {post && (
        <StyledPostDetail>
          <div>
            <BackButton handleClick={history.goBack} />
            <NewPostButton handleClick={showModal} />
          </div>
          <PostRow
            modifyPostVoteValues={modifyPostVoteValues}
            post={post}
            editPost={editPost}
            deletePost={composedDeletePost}>
            <div>
              <CommentFormContainer>
                <WithForm>
                  <CommentForm />
                </WithForm>
              </CommentFormContainer>
              {comments && Array.isArray(comments) && (
                <CommentsList
                  comments={comments}
                  editClick={editClick}
                  deleteComment={deleteComment}
                  modifyCommentVoteValues={modifyCommentVoteValues}
                />
              )}
            </div>
          </PostRow>
        </StyledPostDetail>
      )}
    </Fragment>
  )
};

PostDetail.propTypes = propTypes;
PostDetail.defaultProps = defaultProps;

export default PostDetail;
