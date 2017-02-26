import { expect } from 'chai'
import { renderComponent } from '~/components/TestHelper'
import { App } from './index'

describe('<App />', () => {

  const routes = []
  const props = { location: { pathname: 'foo-bar' }}
  const component = renderComponent(App(routes), {}, props)

  it('Renders with correct style', () => {
    const s = require('./style.css')
    expect(component.find(s.appContainer)).to.exist
  })

})
