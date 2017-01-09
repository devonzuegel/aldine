import Token from './index'
import * as React from 'react'
import { mount } from 'enzyme'
import * as chai from 'chai'
import * as spies from 'chai-spies'

const expect = chai.expect
chai.use(spies)

describe('<Token />', () => {
  beforeEach(() => {
    this.categorize = chai.spy(() => null)
    this.component = mount(
      <Token categorize={this.categorize}>
        This is a child
      </Token>
    )
  })

  it('categorizes when clicked', () => {
    this.component.simulate('click')
    expect(this.categorize).to.have.been.called()
  })
})
