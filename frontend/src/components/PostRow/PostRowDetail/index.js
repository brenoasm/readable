import React from 'react';
import PropTypes from 'prop-types';

import { convertDate } from '../../../utils/converters';

const propTypes = {
  post: PropTypes.object
};

const defaultProps = {
  post: {
    author: '',
    timestamp: null
  }
};

const PostRowDetail = ({ post }) => (
  <div>
    <span>
      <strong>
        {post.author}
      </strong>
    </span>
    <span>
      <small>
        <i title="Data da postagem" className="far fa-calendar"></i> &nbsp;
        {!!post.timestamp && convertDate(post.timestamp, 'DD/MM/YYYY HH:MM')}
      </small>
    </span>
  </div>
);

PostRowDetail.propTypes = propTypes;
PostRowDetail.defaultProps = defaultProps;

export default PostRowDetail;
