/* eslint-disable */

import React from 'react';

import CommentRowTitle from './';

describe('CommentRowTitle', () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      comment: {
        id: '1',
        parentId: '12',
        timestamp: 1538417732043,
        body: 'Test',
        author: 'Breno',
        voteScore: 1,
        deleted: false,
        parentDeleted: false
      },
      editClick: jest.fn(),
      deleteComment: jest.fn()
    };

    wrapper = shallow(<CommentRowTitle {...initialState} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one EditIcon component', () => {
    expect(wrapper.find('EditIcon')).toHaveLength(1);
  });

  it('should have one DeleteIcon component', () => {
    expect(wrapper.find('DeleteIcon')).toHaveLength(1);
  });
});
