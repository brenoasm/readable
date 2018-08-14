import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';



import CategoryCard from '../../components/CategoryCard';

class CategoriesList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { posts, categories } = this.props;

    return (
      <Fragment>
        {categories.map(category =>
          <CategoryCard key={category.name} category={category} />
        )}

      </Fragment>
    )
  }
};

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = ({ postsState }) => ({
  posts: getPosts(postsState)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
