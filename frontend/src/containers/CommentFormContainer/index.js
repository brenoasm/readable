import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

import { getSelectedPostId } from '../../selectors/postsSelector';

import { getFormProperties } from '../../selectors/commentsSelector';
import { submitComment } from '../../actions/commentsAction';

const propTypes = {

};

class CommentFormContainer extends Component {
  state = {
    formProperties: {}
  };

  componentDidUpdate(prevProps, prevState) {
    const { formProperties, parentId } = this.props;

    const parsedFormProperties = Object.keys(formProperties)
      .reduce((newObj, prop) => {
        const param = formProperties[prop];

        const newProp = {
          ...param,
          value: prop === 'parentId' ? parentId : param.value || ''
        };

        return {
          ...newObj,
          [prop]: newProp
        }

      }, {});

    if (
      prevProps &&
      !_.isEqual(prevState.formProperties, parsedFormProperties)
    ) {
      this.setState({
        formProperties: parsedFormProperties
      });
    }
  }

  render() {
    const { children, onSubmit } = this.props;
    const { formProperties } = this.state;

    return (
      <Fragment>
        {Object.keys(formProperties).length > 0 &&
          React.cloneElement(children, {
            formProperties: formProperties,
            onSubmit
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ commentsState, postsState }) => ({
  formProperties: getFormProperties(commentsState),
  parentId: getSelectedPostId(postsState)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (comment, parentId) => dispatch(submitComment(comment, parentId)),
});

CommentFormContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);
