import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getFormProperties } from '../../selectors/postsSelector';

class PostFormContainer extends Component {
  onSubmit = newPost => {
    console.log(newPost)
  };

  render() {
    const { postFormProperties } = this.props;
    const { onSubmit } = this;

    return (
      <Fragment>
        {React.cloneElement(this.props.children, {
          postFormProperties,
          onSubmit
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ postsState }) => ({
  postFormProperties: getFormProperties(postsState)
});

export default connect(mapStateToProps)(PostFormContainer);
