import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { getFormProperties, getPost } from '../../selectors/postsSelector';
import { getCategories } from '../../selectors/categoriesSelector';
import { fetchCategories } from '../../actions/categoriesAction';

import { submitPost } from '../../actions/postsAction';

class PostFormContainer extends Component {
  state = {
    formProperties: {}
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const parsedCategories = this.props.categories.map(category => ({
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
  onSubmit: post => dispatch(submitPost(post)),
  fetchCategories: () => dispatch(fetchCategories())
});

const mapStateToProps = ({ postsState, categoryState }) => ({
  postFormProperties: getFormProperties(postsState),
  categories: getCategories(categoryState),
  post: getPost(postsState)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);
