import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const Home = ({ children }) => {
  return (
    <div>
      <h1>Home!!</h1>
      {children}
    </div>
  );
};

Home.propTypes = propTypes;

export default Home;
