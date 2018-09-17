import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getFormProperties } from '../../selectors/commentsSelector';

const propTypes = {

};

class CommentFormContainer extends Component {
  state = {
    formProperties: {}
  };

  componentDidMount() {

  }

  render() {
    const { formProperties, children } = this.props;

    return (
      <Fragment>
        {React.cloneElement(children, {
          formProperties
          // Passar o submit
        })}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ commentsState }) => ({
  formProperties: getFormProperties(commentsState)
  // Criar submit de comments
});

CommentFormContainer.propTypes = propTypes;

export default connect(mapStateToProps)(CommentFormContainer);
