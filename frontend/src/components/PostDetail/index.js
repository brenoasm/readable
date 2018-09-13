import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../theme';

import PostRow from '../../components/PostRow';
import NewPostButton from '../../components/buttons/NewPostButton';
import FormHOC from '../forms/FormHOC';
import CommentFormContainer from '../../containers/CommentFormContainer';

const propTypes = {

};

const StyledPostDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  button {
    align-self: flex-end;
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
  showModal
}) => {

  return (
    <Fragment>
      {post && (
        <StyledPostDetail>
          <NewPostButton handleClick={showModal} />
          {/* Ver o motivo de as funções não funfar */}
          <PostRow modifyVotes={modifyVotes} post={post} editPost={editPost}>
            <div>
              <CommentFormContainer>
                <FormHOC>
                  {/* Criar o form de comment */}
                </FormHOC>
              </CommentFormContainer>
              {Array.isArray(comments) && (
                <ul>
                  {comments.map(comment => (
                    <li key={comment.id}>{comment.id}</li>
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

export default PostDetail;
