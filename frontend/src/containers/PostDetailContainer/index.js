import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getPost } from '../../selectors/postsSelector';
import {
  handleGetPost,
  modifyPostVoteValues,
  editPost } from '../../actions/postsAction';

import { getModalState } from '../../selectors/modalSelector';
import { showModal, hideModal } from '../../actions/modalAction';

import { getComments } from '../../selectors/commentsSelector';

import PostDetail from '../../components/PostDetail';

class PostDetailContainer extends Component {
  componentDidMount() {
    const { match, onLoad } = this.props;

    onLoad(match.params.id);
  }

  componentWillReceiveProps(prevProps) {

  }

  render() {

    return (
      <PostDetail {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(handleGetPost(id)),
  modifyVotes: (post, vote) => dispatch(modifyPostVoteValues(post, vote)),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
  editPost: (post) => compose(
    dispatch(showModal()),
    dispatch(editPost(post)),
  )
});

const mapStateToProps = ({ postsState, commentsState, modalState }) => ({
  post: getPost(postsState),
  comments: getComments(commentsState),
  modalIsVisible: getModalState(modalState)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
