import * as React       from 'react'
import * as classnames  from 'classnames'
import { A }            from 'components/Typography'
import { ILocation }    from 'models/location'
import { IRouteConfig } from 'models/route-config'

const s = require('./style.css')

const classes = (currPath: string) => ({ path }: IRouteConfig) => (
  classnames({
    [s.headerItem]: true,
    [s.headerItemSelected]: currPath.replace('/', '') === path || currPath === path,
  })
)
const HeaderItem = (currPath: string) => (route: IRouteConfig, i: number) => (
  <li className={classes(currPath)(route)} key={i}>
    <A to={route.path}>
      {route.title}
    </A>
  </li>
)

const Header = ({ routes, location }: { routes: IRouteConfig[], location: ILocation }) => (
  <nav className={s.nav}>
    <ul>
      {routes.map(HeaderItem(location.pathname))}
    </ul>
  </nav>
)

export { Header }
