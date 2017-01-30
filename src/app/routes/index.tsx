import * as React from 'react'
import { IndexRoute, Route } from 'react-router'
import { IRouteConfig } from '~/models/route-config'
import { App } from '~/components/App'
import { Home } from '~/modules/Home'
import { Counter } from '~/modules/Counter'
import { TaggedProse } from '~/modules/TaggedProse'
import { GardenPaths } from '~/components/GardenPaths'

const config: IRouteConfig[] = [
  { path: '/',      title: 'Theme Changer', component: Home        },
  { path: 'tag',    title: 'Tagged Prose',  component: TaggedProse },
  { path: 'garden', title: 'Garden Paths',  component: GardenPaths },
]

const buildRoute = (route: IRouteConfig) => (
  (route.path === '/') ?
  <IndexRoute component={route.component} /> :
  <Route path={route.path} component={route.component} />
)

export default (
  <Route path='/' component={App(config)}>
    {config.map(buildRoute)}
  </Route>
)
