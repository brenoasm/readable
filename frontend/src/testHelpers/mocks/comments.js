import PostMock from './posts';

const CommentMock = {
  comments: [
    {
      id: '1',
      parentId: PostMock.posts[0].id,
      timestamp: 1538417732043,
      body: 'Test',
      author: 'Breno',
      voteScore: 1,
      deleted: false,
      parentDeleted: PostMock.posts[0].deleted
    },
    {
      id: '2',
      parentId: PostMock.posts[0].id,
      timestamp: 1538419906880,
      body: 'Test 2',
      author: 'Joãozinho',
      voteScore: 2,
      deleted: false,
      parentDeleted: PostMock.posts[0].deleted
    },
  ],
  formProperties: {

  }
};

export default CommentMock;
