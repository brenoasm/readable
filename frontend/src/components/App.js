import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomeContainer from '../containers/HomeContainer';
import PostDetailContainer from '../containers/PostDetailContainer';


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

const App = () => (
  <StyledApp>
    <div className="header">
      <ul>

      </ul>
    </div>
    <div className="body">
      <Switch>
        <Route path="/posts/:id" component={PostDetailContainer} />
        <Route path="/:categoryName" component={HomeContainer} />
        <Route path="/" exact={true} component={HomeContainer} />
      </Switch>
    </div>
  </StyledApp>
);


export default App;
