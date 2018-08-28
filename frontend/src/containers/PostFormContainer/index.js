import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import * as _ from 'lodash';

import { getFormProperties } from '../../selectors/postsSelector';
import { getCategories } from '../../selectors/categoriesSelector';

import { submitPost } from '../../actions/postsAction';

class PostFormContainer extends Component {
  state = {
    formProperties: {}
  };

  componentDidUpdate(prevProps, prevState) {
    const { params } = this.props.match;

    const parsedCategories = this.props.categories
      .filter(
        category =>
          !params.categoryName || category.name === params.categoryName
      )
      .map(category => ({
        label: category.name,
        value: category.name
      }));

    const parsedFormProperties = {
      ...this.props.postFormProperties,
      category: {
        ...this.props.postFormProperties.category,
        options: parsedCategories
      }
    };

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
    const { formProperties } = this.state;
    const { onSubmit } = this.props;

    return (
      <Fragment>
        {Object.keys(formProperties).length > 0 &&
          React.cloneElement(this.props.children, {
            formProperties: formProperties,
            onSubmit
          })}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: post => dispatch(submitPost(post))
});

const mapStateToProps = ({ postsState, categoryState }) => ({
  postFormProperties: getFormProperties(postsState),
  categories: getCategories(categoryState)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostFormContainer);
