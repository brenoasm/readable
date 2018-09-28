/* eslint-disable */

import React from 'react';

import Home from './';

describe('Home', () => {
  it('matches the snapshot', () => {
    const initialProps = {
      posts: [
        {
          "id": "8xf0y6ziyjabvozdd253nd",
          "timestamp": 1467166872634,
          "title": "Udacity is the best place to learn React",
          "body": "Everyone says so after all.",
          "author": "thingtwo",
          "category": "react",
          "voteScore": 6,
          "deleted": false,
          "commentCount": 2
        },
        {
          "id": "4771766477535847731044778930",
          "timestamp": 1538493219570,
          "title": "s",
          "body": "c",
          "author": "a",
          "category": "react",
          "voteScore": 1,
          "deleted": false,
          "commentCount": 0
        }
      ],
      categories: [
        {
          "name": "react",
          "path": "react"
        },
        {
          "name": "redux",
          "path": "redux"
        },
        {
          "name": "udacity",
          "path": "udacity"
        }
      ],
      modifyPostVoteValues: jest.fn(),
      sortMethods: [
        {
          "text": "Por data",
          "value": "sort_by_date"
        },
        {
          "text": "Por votos",
          "value": "sort_by_vote_score"
        }
      ],
      selectedSortMethod: 'sort_by_date',
      getSelectedSortMethod: jest.fn(),
      showModal: jest.fn(),
      editPost: jest.fn(),
      deletePost: jest.fn(),
      activeRoute: '/redux'
    };

    const wrapper = shallow(<Home {...initialProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should not render a categoryList component', () => {
    const initialProps = {
      categories: null,
    };

    const wrapper = shallow(<Home {...initialProps} />);

    expect(wrapper.find('CategoryList')).toHaveLength(0);
  });

  it('should render a categoryList component', () => {
    const initialProps = {
      categories: [
        {
          "name": "react",
          "path": "react"
        },
        {
          "name": "redux",
          "path": "redux"
        },
        {
          "name": "udacity",
          "path": "udacity"
        }
      ],
    };

    const wrapper = shallow(<Home {...initialProps} />);

    expect(wrapper.find('CategoryList')).toHaveLength(1);
  });

  it('should not render a PostsList component', () => {
    const initialProps = {
      posts: null,
    };

    const wrapper = shallow(<Home {...initialProps} />);

    expect(wrapper.find('PostsList')).toHaveLength(0);
  });

  it('should render a PostsList component', () => {
    const initialProps = {
      posts: [
        {
          "id": "8xf0y6ziyjabvozdd253nd",
          "timestamp": 1467166872634,
          "title": "Udacity is the best place to learn React",
          "body": "Everyone says so after all.",
          "author": "thingtwo",
          "category": "react",
          "voteScore": 6,
          "deleted": false,
          "commentCount": 2
        },
        {
          "id": "4771766477535847731044778930",
          "timestamp": 1538493219570,
          "title": "s",
          "body": "c",
          "author": "a",
          "category": "react",
          "voteScore": 1,
          "deleted": false,
          "commentCount": 0
        }
      ],
    };

    const wrapper = shallow(<Home {...initialProps} />);

    expect(wrapper.find('PostsList')).toHaveLength(1);
  });
});
