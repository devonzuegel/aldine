import * as React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, Home } from '~/containers'
import { Counter } from '~/modules/Counter'
import { TaggedProse } from '~/modules/TaggedProse'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="counter" component={Counter} />
    <Route path="tag" component={TaggedProse} />
  </Route>
)
