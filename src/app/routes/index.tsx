import * as React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, Home, Counter, TaggedProse } from '~/containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="counter" component={Counter} />
    <Route path="tag" component={TaggedProse} />
  </Route>
)
