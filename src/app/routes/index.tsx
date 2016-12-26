import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, About, Counter } from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
  </Route>
);
