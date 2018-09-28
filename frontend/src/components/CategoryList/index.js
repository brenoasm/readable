import React, { Fragment } from 'react';

import CategoryRow from '../CategoryRow';

const CategoryList = ({ categories, activeRoute }) => (
  <Fragment>
    <CategoryRow key="Home" />
    {Array.isArray(categories) && categories.map(category => (
      <CategoryRow
        key={category.name}
        activeRoute={activeRoute}
        category={category} />
    ))}
  </Fragment>
);

export default CategoryList;
