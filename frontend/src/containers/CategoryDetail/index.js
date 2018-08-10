import React from 'react';
import { connect } from 'react-redux';

import { getCategoryDetail } from '../../actions/categoriesAction';

const CategoryDetail = ({ categoryName, getCategoryDetail }) => {
  const posts = getCategoryDetail();

  return (
    <div>
      <h2>{categoryName}</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { categoryName }) => ({
    getCategoryDetail: () => dispatch(getCategoryDetail(categoryName))
});

export default connect(null, mapDispatchToProps)(CategoryDetail);
