import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import ModalPostForm from './modals/ModalPostForm';
import NotFound from '../components/errorsPages/Not-found';

import HomeContainer from '../containers/HomeContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

const StyledApp = styled.div`
  display: grid;
  min-height: 80%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;

  > div:first-child {
    min-height: 30px;
    grid-column: 2 / 12;
    grid-row: 1 / span(1);
  }

  > div:last-child {
    grid-column: 2 / 12;
    grid-row: 2 / span(1);
    padding: 20px;
  }
`;

const App = ({
  modalIsVisible,
  hideModal
}) => (
  <StyledApp>
    <div>&nbsp;</div>
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/:category/:id" component={PostDetailContainer} />
          <Route path="/:categoryName" component={HomeContainer} />
          <Route path="/" exact component={HomeContainer} />
        </Switch>
      </BrowserRouter>
     <ModalPostForm modalIsVisible={modalIsVisible} handleClose={hideModal} />
    </div>
  </StyledApp>
);

export default App;
