import React from 'react';

import CategoryDetail from '../../containers/CategoryDetail';

const Category = ({ match }) => {
  return (
    <div>
      <h1>Category!!</h1>
      <CategoryDetail categoryName={match.params.categoryName}/>
    </div>
  );
};

export default Category;
