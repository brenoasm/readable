import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleGetPost } from '../../actions/postsAction';
import { getPost } from '../../selectors/postsSelector';
import { getComments } from '../../selectors/commentsSelector';

class PostDetailContainer extends Component {
  componentDidMount() {
    const { match, onLoad } = this.props;

    onLoad(match.params.id);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <h2>{post && post.id}</h2>
        <ul>
          {Array.isArray(comments) && comments.map(comment => (
            <li>{comment.id}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(handleGetPost(id))
});

const mapStateToProps = ({ postsState, commentsState }) => ({
  post: getPost(postsState),
  comments: getComments(commentsState)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);
