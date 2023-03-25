import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppRated from './pages/AppRated';
import AppSearch from './pages/AppSearch';
import HeaderUp from './header/headerUp/headerUp';

const App = () => {
  return (
    <div className="allContent">
      <HeaderUp />
      <Switch>
        <Route path="/" exact component={AppSearch} />
        <Route path="/reted" component={AppRated} />
      </Switch>
    </div>
  );
};

export default App;
