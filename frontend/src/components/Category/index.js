import React from 'react';

const Category = ({ match }) => {
  return (
    <div>
      <h1>Category!!</h1>
      <h2>{match.params.category}</h2>
    </div>
  );
}

export default Category;
