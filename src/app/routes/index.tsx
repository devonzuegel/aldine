import * as React            from 'react'
import { IndexRoute, Route } from 'react-router'

import { IRouteConfig } from '~/models/route-config'
import { App          } from '~/components/App'
import { Home         } from '~/modules/Home'
import { Counter      } from '~/modules/Counter'
import { TaggedProse  } from '~/modules/TaggedProse'
import { AutomatedPOS } from '~/modules/AutomatedPOS'
import { GardenPaths  } from '~/components/GardenPaths'
import { Styleguide   } from './Styleguide'

const config: IRouteConfig[] = [
  { path: '/',          title: 'Theme Changer', component: Home         },
  { path: 'tag',        title: 'Tagged Prose',  component: TaggedProse  },
  { path: 'pos',        title: 'Automated POS', component: AutomatedPOS },
  { path: 'garden',     title: 'Garden Paths',  component: GardenPaths  },
  { path: 'styleguide', title: 'Styleguide',    component: Styleguide   },
]

const buildRoute = (route: IRouteConfig, i: number) => (
  (route.path === '/') ?
  <IndexRoute component={route.component} key={i} /> :
  <Route path={route.path} component={route.component} key={i} />
)

export default (
  <Route path='/' component={App(config)}>
    {config.map(buildRoute)}
  </Route>
)
