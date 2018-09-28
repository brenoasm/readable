import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../theme';

const defaultProps = {
  category: {
    name: 'Home',
    path: '/'
  }
}

const StyledCategoryRow = styled.div`
  width: 100%;
  min-height: 100px;
  line-height: 100px;
  box-shadow: 0 1px 3px ${colors.primary.primaryThree};
  padding: 20px;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;

  &:hover, &.active {
    border-left: 5px solid ${colors.primary.primaryThree};
  }

  a {
    font-size: 28px;
    text-decoration: none;
    color: ${colors.black};
  }
`;

const CategoryRow = ({ category, activeRoute }) => (
  <StyledCategoryRow className={activeRoute === `/${category.path}`
    ? 'active' : ''}>
    <Link to={category.path}>
      {category.name}
    </Link>
  </StyledCategoryRow>
);

CategoryRow.defaultProps = defaultProps;

export default CategoryRow;
