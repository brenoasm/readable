import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getFormProperties } from '../../selectors/postsSelector';
import { getCategories } from '../../selectors/categoriesSelector';

class PostFormContainer extends Component {
  state = {
    formProperties: {}
  };

  onSubmit = newPost => {
    console.log(newPost);
  };

  componentDidUpdate(prevProps) {
    if (prevProps && prevProps.categories !== this.props.categories) {
      const parsedCategories = this.props.categories.map(category => ({
        label: category.name,
        value: category.name
      }));

      this.setState({
        formProperties: {
          ...this.props.postFormProperties,
          category: {
            ...this.props.postFormProperties.category,
            options: parsedCategories
          }
        }
      });
    }
  }

  render() {
    const { formProperties } = this.state;
    const { onSubmit } = this;

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

const mapStateToProps = ({ postsState, categoryState }) => ({
  postFormProperties: getFormProperties(postsState),
  categories: getCategories(categoryState)
});

export default connect(mapStateToProps)(PostFormContainer);
