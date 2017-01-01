import { expect } from 'chai'
import { renderComponent } from '../../helpers/TestHelper'
import { App } from './index'

describe('<App />', () => {

  const component = renderComponent(App)

  it('Renders with correct style', () => {
    const s = require('./style.css')
    expect(component.find(s.appContainer)).to.exist
  })

})
