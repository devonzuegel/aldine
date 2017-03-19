import { expect } from 'chai'

import { renderComponent } from '~/components/TestHelper'
import { App             } from './index'
import { IRouteConfig    } from '~/models/route-config'

describe('<App />', () => {

  const routes: IRouteConfig[] = []
  const props = { location: { pathname: 'foo-bar' }}
  const component = renderComponent(App(routes), {}, props)

  it('Renders with correct style', () => {
    const s = require('./style.css')
    expect(component.find(s.appContainer)).to.exist
  })

})
