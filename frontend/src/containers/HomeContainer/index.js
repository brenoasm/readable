import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { fetchCategories } from '../../actions/categoriesAction';
import { getCategories } from '../../selectors/categoriesSelector';

import { getPosts } from '../../selectors/postsSelector';
import {
  getAllPosts,
  getCategoryPosts,
  modifyPostVoteValues,
  editPost
} from '../../actions/postsAction';

import {
  getSortMethods,
  getSelectedSortMethod
} from '../../selectors/sortMethodsSelector';
import { handleSortMethod } from '../../actions/sortMethodAction';

import { getModalState } from '../../selectors/modalSelector';
import { showModal, hideModal } from '../../actions/modalAction';

import Home from '../../components/Home';

class HomeContainer extends Component {
  checkWichPostsToLoad = categoryName => {
    const { getCategoryPosts, getAllPosts } = this.props;

    !!categoryName ? getCategoryPosts(categoryName) : getAllPosts();
  };

  componentWillReceiveProps({ location, match }) {
    if (location.pathname !== this.props.location.pathname) {
      this.checkWichPostsToLoad(match.params.categoryName);
    }
  }

  componentDidMount() {
    this.checkWichPostsToLoad(this.props.match.params.categoryName);
    this.props.fetchCategories();
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getCategoryPosts: categoryName => dispatch(getCategoryPosts(categoryName)),
  modifyVotes: (post, vote) => dispatch(modifyPostVoteValues(post, vote)),
  getSelectedSortMethod: value => dispatch(handleSortMethod(value)),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
  fetchCategories: () => dispatch(fetchCategories()),
  editPost: (post) => compose(
    dispatch(showModal()),
    dispatch(editPost(post)),
  )
});

const mapStateToProps = ({
  categoryState,
  postsState,
  sortMethodsState,
  modalState
}) => ({
  categories: getCategories(categoryState),
  posts: getPosts(postsState),
  sortMethods: getSortMethods(sortMethodsState),
  selectedSortMethod: getSelectedSortMethod(sortMethodsState),
  modalIsVisible: getModalState(modalState)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomeContainer);
