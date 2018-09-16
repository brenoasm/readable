import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import App from '../../components/App';

import { getModalState } from '../../selectors/modalSelector';
import { hideModal } from '../../actions/modalAction';

const propTypes = {};

class AppContainer extends Component {

  render () {
    return (
      <App {...this.props} />
    )
  }
}

const mapStateToProps = ({ modalState }) => ({
  modalIsVisible: getModalState(modalState),
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
});

AppContainer.propTypes = propTypes;

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AppContainer);
