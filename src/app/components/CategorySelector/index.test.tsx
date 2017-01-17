import CategorySelector from './index'
import * as React from 'react'
import { mount } from 'enzyme'
import * as chai from 'chai'
import * as spies from 'chai-spies'
const expect = chai.expect
chai.use(spies)

const s = require('./style.css')

const categories = [ 'category1', 'category2', 'category3' ]
const selected = 1

describe('<CategorySelector />', () => {
  beforeEach(() => {
    this.select = chai.spy(() => null)
    this.component = mount(
      <CategorySelector {...{ categories, selected, select: this.select }} />
    )
  })

  it('lists each category', () => {
    const categoryElems = this.component.find(`.${s.category}`)
    expect(categoryElems.length).to.eql(categories.length)
  })

  it('has the correct selected category', () => {
    const selectedElem = this.component.find(`.${s['category--selected']}`)
    expect(selectedElem.length).to.eql(1)
    expect(selectedElem.first().text()).to.eql(categories[selected])
  })

  it('selects selected category when a category is clicked', () => {
    const categoryElems = this.component.find(`.${s.category}`)
    categoryElems.forEach((token, i: number) => {
      token.simulate('click')
      expect(this.select).to.have.been.called.with(i)
    })
    expect(this.select).to.not.have.been.called.with(categoryElems.length)
  })
})
