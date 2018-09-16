import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ModalPostForm from './modal/ModalPostForm';

import HomeContainer from '../containers/HomeContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

import { getModalState } from '../selectors/modalSelector';
import { hideModal } from '../actions/modalAction';

const propTypes = {};

const StyledApp = styled.div`
  display: grid;
  min-height: 80%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;

  .header {
    min-height: 60px;
    grid-column: 2 / 12;
    grid-row: 1 / span(1);
  }

  .body {
    grid-column: 2 / 12;
    grid-row: 2 / span(1);
    padding: 20px;
  }
`;

const App = (props) => (
  <StyledApp>
    <div className="header">
      <ul>

      </ul>
    </div>
    <div className="body">
      <Switch>
        <Route path="/posts/:id" component={PostDetailContainer} />
        <Route path="/:categoryName" component={HomeContainer} />
        <Route path="/" exact component={HomeContainer} />
      </Switch>
     {/* <ModalPostForm modalIsVisible={props.modalIsVisible} handleClose={props.hideModal} /> */}
    </div>
  </StyledApp>
);

const mapStateToProps = ({ modalState }) => ({
  modalIsVisible: getModalState(modalState),
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
});

App.propTypes = propTypes;

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
