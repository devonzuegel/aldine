import CategorySelector from './index'
import * as React from 'react'
import * as R from 'ramda'
import { mount } from 'enzyme'
import * as chai from 'chai'
import * as spies from 'chai-spies'
import { ITokenCategories } from '~/models/token-categories'
const expect = chai.expect
chai.use(spies)

const s = require('./style.css')

const selected: string = 'category2'
const categories: ITokenCategories = {
  category1: 'category1',
  category2: 'category2',
  category3: 'category3',
}
const select = chai.spy(() => null)
const component = mount(<CategorySelector {...{ categories, selected, select: select }} />)

describe('<CategorySelector />', () => {
  it('lists each category', () => {
    const categoryElems = component.find(`.${s.category}`)
    expect(categoryElems.length).to.eql(R.keys(categories).length)
  })

  it('has the correct selected category', () => {
    const selectedElem = component.find(`.${s['category--selected']}`)
    expect(selectedElem.length).to.eql(1)
    expect(selectedElem.first().text()).to.eql(selected)
  })

  it('selects selected category when a category is clicked', () => {
    const categoryElems = component.find(`.${s.category}`)
    categoryElems.forEach((token) => {
      token.simulate('click')
      expect(select).to.have.been.called.with(token.text())
    })
    expect(select).to.not.have.been.called.with(categoryElems.length)
  })
})
