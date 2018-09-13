import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../../components/App';

const propTypes = {};

class AppContainer extends Component {

  render () {

    return (
      <App />
    )
  }
}

AppContainer.propTypes = propTypes;

export default connect()(AppContainer);