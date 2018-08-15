import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomeContainer from '../containers/HomeContainer';

const StyledApp = styled.div`
  display: grid;
  min-height: 80%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr;

  .header {
    min-height: 60px;
    grid-column: 3 / 11;
    grid-row: 1 / span(1);
  }

  .body {
    grid-column: 3 / 11;
    grid-row: 2 / span(1);
    padding: 20px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <div className="header">
        <ul>

        </ul>
      </div>
      <div className="body">
        <Switch>
          <Route path="/" exact={true} component={HomeContainer} />
          <Route path="/:categoryName" component={HomeContainer} />
        </Switch>
      </div>
    </StyledApp>
  );
}

export default App;
