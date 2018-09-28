import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../theme';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';
import ToolsRow from '../ToolsRow';

const propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  modifyPostVoteValues: PropTypes.func,
  sortMethods: PropTypes.arrayOf(PropTypes.object),
  selectedSortMethod: PropTypes.string,
  getSelectedSortMethod: PropTypes.func,
  showModal: PropTypes.func,
  editPost: PropTypes.func,
  deletePost: PropTypes.func,
  activeRoute: PropTypes.string
};

const defaultProps = {
  posts: null,
  categories: null,
  modifyPostVoteValues: () => {},
  sortMethods: [],
  selectedSortMethod: '',
  getSelectedSortMethod: () => {},
  showModal: () => {},
  editPost: () => {},
  deletePost: () => {},
  activeRoute: ''
};

const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary.primaryFour};
  margin-top: 10px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary.primaryFive};
    min-width: 200px;
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};
    border-right: 1px solid ${colors.primary.primaryFive};
  }

  > div:last-child {
    min-width: calc(100% - 200px);
    max-height: 580px;
    overflow-y: auto;
    background-color: ${colors.primary.primaryFour};
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};
  }
`;

const Home = ({
  posts,
  categories,
  modifyPostVoteValues,
  sortMethods,
  selectedSortMethod,
  getSelectedSortMethod,
  showModal,
  editPost,
  deletePost,
  activeRoute
}) => (
  <Fragment>
    <ToolsRow
      showModal={showModal}
      options={sortMethods}
      selectedOption={selectedSortMethod}
      onFilterChange={getSelectedSortMethod}
    />
    <StyledHome>
      <div>
        {Array.isArray(categories) && (
          <CategoryList
            categories={categories}
            activeRoute={activeRoute}
          />
        )}
      </div>
      <div>
        {Array.isArray(posts) && (
          <PostsList
            posts={posts}
            modifyPostVoteValues={modifyPostVoteValues}
            sortMethod={selectedSortMethod}
            editPost={editPost}
            deletePost={deletePost}
          />
        )}
      </div>
    </StyledHome>
  </Fragment>
);

Home.displayName = 'Home';

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
