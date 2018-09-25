import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getPost } from '../../selectors/postsSelector';
import {
  handleGetPost,
  modifyPostVoteValues,
  editPost,
  deletePost,
  getAllPosts } from '../../actions/postsAction';

import { getModalState } from '../../selectors/modalSelector';
import { showModal, hideModal } from '../../actions/modalAction';

import { getComments } from '../../selectors/commentsSelector';
import { handleEditCommentClick, deleteComment } from '../../actions/commentsAction';

import PostDetail from '../../components/PostDetail';

class PostDetailContainer extends Component {
  componentDidMount() {
    const { match, onLoad, getAllPosts } = this.props;

    getAllPosts();
    onLoad(match.params.id);
  }

  render() {

    return (
      <PostDetail {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(handleGetPost(id)),
  getAllPosts: () => dispatch(getAllPosts()),
  modifyVotes: (post, vote) => dispatch(modifyPostVoteValues(post, vote)),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
  editPost: (post) => compose(
    dispatch(showModal()),
    dispatch(editPost(post)),
  ),
  deletePost: (post) => dispatch(deletePost(post)),
  editClick: (comment) => dispatch(handleEditCommentClick(comment)),
  deleteComment: (id) => dispatch(deleteComment(id))
});

const mapStateToProps = ({ postsState, commentsState, modalState }) => ({
  post: getPost(postsState),
  comments: getComments(commentsState),
  modalIsVisible: getModalState(modalState)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
