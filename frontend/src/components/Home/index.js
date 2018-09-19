import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../theme';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';
import ToolsRow from '../ToolsRow';

const propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
  modifyVotes: PropTypes.func,
  sortMethods: PropTypes.array,
  selectedSortMethod: PropTypes.string,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  modalIsVisible: PropTypes.bool
};

const defaultProps = {
  posts: [],
  categories: [],
  modifyVotes: () => {},
  sortMethods: [],
  selectedSortMethod: '',
  showModal: () => {}
};

const StyledHome = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary.primaryFour};
  margin-top: 10px;

  .category-wrapper {
    display: flex;
    flex-direction: column;
    background-color: ${colors.primary.primaryFive};
    min-width: 200px;
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};
    border-right: 1px solid ${colors.primary.primaryFive};
  }

  .posts-wrapper {
    min-width: calc(100% - 200px);
    max-height: 575px;
    overflow-y: auto;
    background-color: ${colors.primary.primaryFour};
    box-shadow: 0 2px 5px ${colors.primary.primaryTwo};
  }
`;

const Home = ({
  posts,
  categories,
  modifyVotes,
  sortMethods,
  selectedSortMethod,
  getSelectedSortMethod,
  showModal,
  editPost,
  deletePost
}) => (
  <Fragment>
    <ToolsRow
      showModal={showModal}
      options={sortMethods}
      selectedOption={selectedSortMethod}
      onFilterChange={getSelectedSortMethod}
    />
    <StyledHome>
      <div className="category-wrapper">
        <CategoryList categories={categories} />
      </div>
      <div className="posts-wrapper">
        <PostsList
          posts={posts}
          modifyVotes={modifyVotes}
          sortMethod={selectedSortMethod}
          editPost={editPost}
        />
      </div>
    </StyledHome>
  </Fragment>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
