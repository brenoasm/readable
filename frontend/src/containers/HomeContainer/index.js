import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { getPosts } from '../../selectors/postsSelector';
import {
  getAllPosts,
  getCategoryPosts,
  modifyPostVoteValues } from '../../actions/postsAction';

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
    const { posts, categories, modifyVotes } = this.props;

    return (
      <Home posts={posts} categories={categories} modifyVotes={modifyVotes} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getCategoryPosts: categoryName => dispatch(getCategoryPosts(categoryName)),
  modifyVotes: (post, vote) => dispatch(modifyPostVoteValues(post, vote))
});

const mapStateToProps = ({ categoryState, postsState }) => ({
  categories: categoryState.categories,
  posts: getPosts(postsState)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeContainer);
