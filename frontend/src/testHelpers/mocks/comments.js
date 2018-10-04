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
    id: {
      isFormField: false
    },
    parentId: {
      isFormField: false
    },
    timestamp: {
      isFormField: false
    },
    body: {
      validations: [() => {}],
      isFormField: true,
      isValid: null,
    },
    author: {
      validations: [() => {}],
      isFormField: true,
      isValid: null,
    }
  }
};

export default CommentMock;
