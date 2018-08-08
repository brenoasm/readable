import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'react',
    path: 'react'
  },
  {
    name: 'redux',
    path: 'redux'
  },
  {
    name: 'udacity',
    path: 'udacity'
  }
];

const StyledCategoryCard = styled.div`
  margin: 10px auto;
  border: #000 solid 1px;
`;

const Home = props => {
  return (
    <div>
      <h1>Home!!</h1>
      {categories.map(category =>
        <StyledCategoryCard>
          <h2>{category.name}</h2>
          <Link to={category.path}>Ver os detalhes</Link>
        </StyledCategoryCard>
      )}
    </div>
  );
}

export default Home;
