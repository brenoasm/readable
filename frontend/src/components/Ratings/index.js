import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RateIcon from '../icons/RateIcon';

const propTypes = {
  voteScore: PropTypes.number.isRequired,
  rateUp: PropTypes.func.isRequired,
  rateDown: PropTypes.func.isRequired
};

const defaultProps = {
  voteScore: 0,
  rateUp: () => {},
  rateDown: () => {}
};

const Ratings = ({
  voteScore,
  rateUp,
  rateDown
}) => (
  <Fragment>
    <RateIcon
      onClick={rateUp}
      title="Gostei!"
    />
    <span>
      {voteScore}
    </span>
    <RateIcon
      onClick={rateDown}
      title="Não gostei!"
      rateDown
    />
  </Fragment>
);

Ratings.propTypes = propTypes;
Ratings.defaultProps = defaultProps;

export default Ratings;
