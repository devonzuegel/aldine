import * as React from 'react'
import { mount }  from 'enzyme'
import * as chai  from 'chai'
import * as spies from 'chai-spies'

import Token                from '~/components/Token'
import { ITokenCategories } from '~/models/token-categories'
import { TaggedProse      } from './index'

const expect = chai.expect
chai.use(spies)

const tokens: string[]             = 'These words are all tokens.'.split(' ')
const categorized: string[]        = tokens.map(() => 'uncategorized')
const categories: ITokenCategories = {}

const categorize = chai.spy((_: number) => null)
const cat = (i: number) => () => categorize(i)
const component = mount(
  <TaggedProse {...{
    categories,
    tokens,
    categorized,
    categorize: cat }}
  />
)

describe('<TaggedProse />', () => {
  it('initializes tokens as uncategorized', () => {
    expect(component.find(Token).length).to.eql(5)
  })

  it('categorizes elem #i when it is clicked', () => {
    component.find(Token).forEach((token, i: number) => {
      token.simulate('click')
      expect(categorize).to.have.been.called.with(i)
    })
    expect(categorize).to.not.have.been.called.with(component.find(Token).length)
  })
})
