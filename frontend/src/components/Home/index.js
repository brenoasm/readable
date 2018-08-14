import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const Home = ({ children }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

Home.propTypes = propTypes;

export default Home;
