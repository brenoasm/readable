import React from 'react';

import { convertDate } from '../../../utils/converters';

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

export default PostRowDetail;
