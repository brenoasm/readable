import React, { Fragment } from 'react';

const Post = ({ post }) => {

  return (
    <Fragment>
      <h2>{post.title}</h2>
      <small>{post.author}</small>
      <div>
        <p>{post.body}</p>
      </div>
      <div>
        Votos: {post.voteScore}
      </div>
    </Fragment>
  )
};

export default Post;
