import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { colors } from '../../theme';

import PostRow from '../../components/PostRow';
import NewPostButton from '../../components/buttons/NewPostButton';
import BackButton from '../../components/buttons/BackButton';
import WithForm from '../forms/WithForm';
import CommentFormContainer from '../../containers/CommentFormContainer';
import CommentForm from '../forms/CommentForm';
import CommentRow from '../CommentRow';

const propTypes = {

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
  editPost,
  showModal,
  history
}) => {

  return (
    <Fragment>
      {post && (
        <StyledPostDetail>
          <div>
            <BackButton handleClick={history.goBack} />
            <NewPostButton handleClick={showModal} />
          </div>
          <PostRow modifyVotes={modifyVotes} post={post} editPost={editPost}>
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
                      <CommentRow comment={comment} />
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

export default withRouter(PostDetail);
