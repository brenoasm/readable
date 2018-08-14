import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired
};

const StyledCategoryCard = styled.div`
  margin: 10px auto;
  border: #000 solid 1px;
`;

const CategoryCard = ({ category }) => (
  <StyledCategoryCard>
    <h2>{category.name}</h2>
    <Link to={category.path}>Ver os detalhes</Link>
  </StyledCategoryCard>
)

CategoryCard.propTypes = propTypes;

export default CategoryCard;
