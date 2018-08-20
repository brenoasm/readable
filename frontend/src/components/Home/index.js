import React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';

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
  }
`;

const Home = ({ posts, categories, modifyVotes }) => (
  <StyledHome>
    <div className="category-wrapper">
      <CategoryList categories={categories} />
    </div>
    <div className="posts-wrapper">
      <PostsList posts={posts} modifyVotes={modifyVotes} />
    </div>
  </StyledHome>
);

export default Home;
