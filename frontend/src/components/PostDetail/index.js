import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import PostRow from '../../components/PostRow';
import NewPostButton from '../../components/buttons/NewPostButton';
import BackButton from '../../components/buttons/BackButton';
import WithForm from '../forms/WithForm';
import CommentFormContainer from '../../containers/CommentFormContainer';
import CommentForm from '../forms/CommentForm';
import CommentRow from '../CommentRow';

const propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
  modifyVotes: PropTypes.func, // mudar esse nome para identificar que é de um post
  deletePost: PropTypes.func,
  editPost: PropTypes.func,
  showModal: PropTypes.func,
  editClick: PropTypes.func,
  modifyCommentVoteValues: PropTypes.func,
  deleteComment: PropTypes.func,
};

const defaultProps = {
  post: {},
  comments: [],
  modifyVotes: () => {},
  deletePost: () => {},
  editPost: () => {},
  showModal: () => {},
  editClick: () => {},
  modifyCommentVoteValues: () => {},
  deleteComment: () => {},
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

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  > div {
    margin-top: 10px;
  }
`;

const PostDetail = ({
  post,
  comments,
  modifyVotes,
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
            modifyVotes={modifyVotes}
            post={post}
            editPost={editPost}
            deletePost={composedDeletePost}>
            <div>
              <CommentFormContainer>
                <WithForm>
                  <CommentForm />
                </WithForm>
              </CommentFormContainer>
              {Array.isArray(comments) && (
                <ul>
                  {comments.map(comment => (
                    <li key={comment.id}>
                      <CommentRow
                        editClick={editClick}
                        deleteComment={deleteComment}
                        comment={comment}
                        modifyCommentVoteValues={modifyCommentVoteValues} />
                    </li>
                  ))}
                </ul>
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

export default withRouter(PostDetail);
