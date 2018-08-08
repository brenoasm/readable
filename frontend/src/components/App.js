import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Category from './Category';

const App = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:category" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
