import * as React       from 'react'
import { IRouteConfig } from '~/models/route-config'
import { A }            from '~/components/Typography'

const s = require('./style.css')

const HeaderItem = (route: IRouteConfig, i: number) => (
  <li className={s.headerItem} key={i}>
    <A to={route.path}>
      {route.title}
    </A>
  </li>
)

const Header = ({ routes }) => (
  <nav className={s.nav}>
    <ul>
      {routes.map(HeaderItem)}
    </ul>
  </nav>
)

export { Header }
