import * as React from 'react'
import { mount }  from 'enzyme'
import * as chai  from 'chai'
import * as spies from 'chai-spies'

import Token from './index'

const s = require('./style.css')

const expect = chai.expect
chai.use(spies)

const categorize = chai.spy(() => null)
const component = mount(
  <Token categorize={categorize}>
    This is a child
  </Token>
)

describe('<Token />', () => {
  it('categorizes when clicked', () => {
    component.simulate('click')
    expect(categorize).to.have.been.called()
  })

  it('has the token css class', () => {
    expect(component.hasClass(s.token)).to.eql(true)
  })
})
