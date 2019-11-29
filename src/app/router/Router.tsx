import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './routes';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={pages.Events} />
  </Switch>
);

export default Router;
