import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPosts } from '../selectors/postsSelector';
import { getAllPosts } from '../actions/postsAction';

import Post from '../components/Post';
import Category from './Category';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px auto;
  box-sizing: border-box;
  margin: 10 0px;

  .header {
    grid-column: 2 / 10;
    grid-row: 0 / 1;

    ul {
      display: flex;
      justify-content: space-around;

      li {
        list-style-type: none;
      }
    }
  }

  .body {
    grid-column: 2 / 10;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    // Fazer chamada para carregar as categorias
  }

  render() {
    const { categories, posts } = this.props;

    return (
      <StyledApp>
        <div className="header">
          <ul>
            {Array.isArray(categories) && categories.map(category => (
              <li key={category.name}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="body">
          <Switch>
            <Route path="/" exact={true} render={() => (
              <Fragment>
                {Array.isArray(posts) && posts.map(post => (
                  <Post key={post.id} post={post}/>
                ))}
              </Fragment>
            )} />
            <Route path="/:categoryName" component={Category} />
          </Switch>
        </div>
      </StyledApp>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});

const mapStateToProps = ({ categoryState, postsState }) => ({
  categories: categoryState.categories,
  posts: getPosts(postsState)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
