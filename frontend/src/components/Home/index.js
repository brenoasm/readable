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
  modifyPostVoteValues: PropTypes.func,
  sortMethods: PropTypes.array,
  selectedSortMethod: PropTypes.string,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  modalIsVisible: PropTypes.bool
};

const defaultProps = {
  posts: [],
  categories: [],
  modifyPostVoteValues: () => {},
  sortMethods: [],
  selectedSortMethod: '',
  showModal: () => {}
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
  editPost
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
        <CategoryList categories={categories} />
      </div>
      <div>
        <PostsList
          posts={posts}
          modifyPostVoteValues={modifyPostVoteValues}
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
