import * as React from 'react'
import { Link } from 'react-router'
import { IRouteConfig } from '~/models/route-config'
const s = require('./style.css')

const HeaderItem = (route: IRouteConfig, i: number) => (
  <li className={s.headerItem} key={i}>
    <Link to={route.path}>
      {route.title}
    </Link>
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
