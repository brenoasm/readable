import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCategoryPosts } from '../../actions/postsAction';
import { getPosts } from '../../selectors/postsSelector';

import Post from '../../components/Post';

const StyledCategoryDetail = styled.div`
  border: #000 solid 1px;
`;

class CategoryDetail extends Component {
  componentDidMount() {
    this.props.getCategoryPosts();
  }

  render() {
    const { categoryName, posts } = this.props;

    return (
      <StyledCategoryDetail>
        <h2>{categoryName}</h2>
        <div>
          {Array.isArray(posts) && posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </ StyledCategoryDetail>
    );
  }
};

const mapDispatchToProps = (dispatch, { categoryName }) => ({
    getCategoryPosts: () => dispatch(getCategoryPosts(categoryName))
});

const mapStateToProps = ({ postsState }) => ({
  posts: getPosts(postsState)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
