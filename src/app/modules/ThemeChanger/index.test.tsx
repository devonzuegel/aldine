import { expect          } from 'chai'
import { renderComponent } from '~/components/TestHelper'
import { ThemeChanger    } from './index'

describe('<ThemeChanger />', () => {

  const component = renderComponent(ThemeChanger)

  it('Renders with correct style', () => {
    const s = require('./style.css')
    expect(component.find(s.home)).to.exist
  })

})
