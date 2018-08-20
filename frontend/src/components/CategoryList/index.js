import React, { Fragment } from 'react';

import CategoryRow from '../CategoryRow';

const CategoryList = ({ categories }) => (
  <Fragment>
    {Array.isArray(categories) && categories.map(category => (
      <CategoryRow key={category.name} category={category} />
    ))}
  </Fragment>
);

export default CategoryList;
