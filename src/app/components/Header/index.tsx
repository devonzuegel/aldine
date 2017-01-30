import * as React from 'react'
import { Link } from 'react-router'
import { IRouteConfig } from '~/models/route-config'
const s = require('./style.css')

const HeaderItem = (route: IRouteConfig, i: number) => (
  <li>
    <Link to={route.path} key={i}>
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
