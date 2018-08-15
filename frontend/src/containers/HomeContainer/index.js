import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { getPosts } from '../../selectors/postsSelector';
import { getAllPosts, getCategoryPosts } from '../../actions/postsAction';

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
    const { posts, categories } = this.props;

    return (
      <Home posts={posts} categories={categories} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  getCategoryPosts: categoryName => dispatch(getCategoryPosts(categoryName))
});

const mapStateToProps = ({ categoryState, postsState }) => ({
  categories: categoryState.categories,
  posts: getPosts(postsState)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(HomeContainer);
