import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../../selectors/postsSelector';
import { getAllPosts, getCategoryPosts } from '../../actions/postsAction';

class HomeContainer extends Component {
  checkWichPostsToLoad() {
    const categoryName = this.props.match.params.categoryName;

    if (!!categoryName) this.props.getCategoryPosts(categoryName);
    else this.props.getAllPosts();
  }

  componentDidMount() {
    this.checkWichPostsToLoad();
  }

  componentDidUpdate() {
    this.checkWichPostsToLoad();
  }

  render() {
    const { posts, categories } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex", flexDirection : "column"}}>
          {Array.isArray(categories) && categories.map(category => (
            <Link to={category.path}>{category.name}</Link>
          ))}
        </div>
        <div>
          <ul style={{display: "flex", flexDirection : "column"}}>
            {Array.isArray(posts) && posts.map(post => (
              <li>
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
