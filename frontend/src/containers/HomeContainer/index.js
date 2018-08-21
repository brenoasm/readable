import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { getPosts } from '../../selectors/postsSelector';
import {
  getAllPosts,
  getCategoryPosts,
  modifyPostVoteValues } from '../../actions/postsAction';

import {
  getSortMethods,
  getSelectedSortMethod } from '../../selectors/sortMethodsSelector';
import { handleSortMethod } from '../../actions/sortMethodAction';

import Home from '../../components/Home';

class HomeContainer extends Component {
  checkWichPostsToLoad = (categoryName) => {
    const { getCategoryPosts, getAllPosts } = this.props;

    !!categoryName ? getCategoryPosts(categoryName) : getAllPosts();
  }

  componentWillReceiveProps({ location, match }){
    if (location.pathname !== this.props.location.pathname) {
      this.checkWichPostsToLoad(match.params.categoryName);
    }
  }

  componentDidMount() {
    this.checkWichPostsToLoad(this.props.match.params.categoryName);
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getCategoryPosts: categoryName => dispatch(getCategoryPosts(categoryName)),
  modifyVotes: (post, vote) => dispatch(modifyPostVoteValues(post, vote)),
  getSelectedSortMethod: value => dispatch(handleSortMethod(value))
});

const mapStateToProps = ({ categoryState, postsState, sortMethodsState }) => ({
  categories: categoryState.categories,
  posts: getPosts(postsState),
  sortMethods: getSortMethods(sortMethodsState),
  selectedSortMethod: getSelectedSortMethod(sortMethodsState)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeContainer);
