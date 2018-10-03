const PostMock = {
  posts: [
    {
      id: '1',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body:
        'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: 1,
      deleted: false,
      commentCount: 0
    },
    {
      id: '2',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: -1,
      deleted: false,
      commentCount: 1
    },
  ],
  formProperties: {}
};

export default PostMock;
