import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import CategoryCard from '../../components/CategoryCard';

const CategoriesList = ({ categories }) => {
  return (
    <Fragment>
      {categories.map(category =>
        <CategoryCard key={category.name} category={category} />
      )}
    </Fragment>
  )
};

const mapStateToProps = ({ categoryState }) => ({
  categories: categoryState.categories
});

export default connect(mapStateToProps)(CategoriesList);
