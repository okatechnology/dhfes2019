import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './routes';

const Router = () => (
  <Switch>
    <Route exact path={'/'} component={pages.Home} />
    <Route exact path={'/event/'} component={pages.Events} />
    <Route exact path={'/event/:id/'} component={pages.Event} />
  </Switch>
);

export default Router;
