const appConfig = require('../../../../config/main')
import { IRouteConfig } from '~/models/route-config'
import { Header       } from '~/components'
import * as React       from 'react'
import * as Helmet      from 'react-helmet'

const s = require('./style.css')

const App = (routes: IRouteConfig[]) => (props) => (
  <section className={s.appContainer}>
    <Helmet {...appConfig.app} {...appConfig.app.head}/>
    <Header {...{ routes }} />
    {props.children}
  </section>
)

export { App }
