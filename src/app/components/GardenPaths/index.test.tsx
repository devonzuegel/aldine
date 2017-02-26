import { expect } from 'chai'
import { renderComponent } from '~/components/TestHelper'
import { GardenPaths } from './index'
const s = require('./style.css')

describe('<GardenPaths />', () => {

  const component = renderComponent(GardenPaths)

  it('Renders with correct style', () => {
    expect(component.find(s.gardenPaths)).to.exist
  })

})
