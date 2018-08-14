import React from 'react';

import CategoryDetail from '../../containers/CategoryDetail';

const Category = ({ match }) => (
  <div>
    <CategoryDetail categoryName={match.params.categoryName}/>
  </div>
);

export default Category;
