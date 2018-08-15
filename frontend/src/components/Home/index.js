import React from 'react';
import styled from 'styled-components';

import {colors} from '../../theme';

import CategoryRow from '../CategoryRow';
import Post from '../Post';

const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary.primaryFour};

  .category-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary.primaryFive};
    min-width: 200px;
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};
    border-right: 1px solid ${colors.primary.primaryFive};
  }

  .posts-wrapper {
    min-width: calc(100% - 200px);
    background-color: ${colors.primary.primaryFour};
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;

      li {
        margin: 10px;
      }
    }
  }
`;

const Home = ({ posts, categories }) => (
  <StyledHome>
    <div className="category-wrapper">
      {Array.isArray(categories) && categories.map(category => (
        <CategoryRow key={category.name} category={category} />
      ))}
    </div>
    <div className="posts-wrapper">
      <ul>
        {Array.isArray(posts) && posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  </StyledHome>
);

export default Home;
