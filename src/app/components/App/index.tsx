const appConfig = require('../../../../config/main')
import { ILocation }    from '~/models/location'
import { IRouteConfig } from '~/models/route-config'
import { Header       } from '~/components'
import * as React       from 'react'
import * as Helmet      from 'react-helmet'

const s = require('./style.css')

const App = (routes: IRouteConfig[]) => (
  ({ location, children }: { location: ILocation, children: any }) => (
    <section className={s.appContainer}>
      <Helmet {...appConfig.app} {...appConfig.app.head}/>
      <Header {...{ routes, location }} />
      {children}
    </section>
  )
)

export { App }
