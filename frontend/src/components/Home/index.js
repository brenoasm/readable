import React, { Fragment } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';

import CategoryList from '../CategoryList';
import PostsList from '../PostsList';
import ToolsRow from '../ToolsRow';
import Modal from '../Modal';
import FormHOC from '../forms/FormHOC';
import PropTypes from 'prop-types';

import PostFormContainer from '../../containers/PostFormContainer';
import PostForm from '../forms/PostForm';

const propTypes = {
  posts: PropTypes.array,
  categories: PropTypes.array,
  modifyVotes: PropTypes.func,
  sortMethods: PropTypes.array,
  selectedSortMethod: PropTypes.string,
  toggleModal: PropTypes.func,
  showModal: PropTypes.bool
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
  toggleModal,
  showModal
}) => (
  <Fragment>
    <ToolsRow
      toggleModal={toggleModal}
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
        />
      </div>
    </StyledHome>
    <PostFormContainer>
      <FormHOC>
        <Modal show={showModal} handleClose={toggleModal}>
          <PostForm />
        </Modal>
      </FormHOC>
    </PostFormContainer>
  </Fragment>
);

Home.propTypes = propTypes;

export default Home;
