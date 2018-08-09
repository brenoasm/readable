import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import CategoriesList from '../containers/CategoriesList';
import Category from './Category';

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} render={() => (
          <Home>
            <CategoriesList />
          </Home>
        )} />
        <Route path="/:categoryName" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
