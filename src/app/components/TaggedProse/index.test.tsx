import * as React from 'react'
import { mount } from 'enzyme'
import * as chai from 'chai'
import * as spies from 'chai-spies'

import Token from '~/components/Token'
import { ITokenCategories } from '~/models/token-categories'
import { TaggedProse } from './index'

const expect = chai.expect
chai.use(spies)

const tokens: string[] = 'These words are all tokens.'.split(' ')
const categorized = tokens.map(() => 'uncategorized')
const categories: ITokenCategories = {}

describe('<TaggedProse />', () => {
  beforeEach(() => {
    this.categorize = chai.spy((i: number) => null)
    const categorize = (i: number) => () => this.categorize(i)
    this.component = mount(<TaggedProse {...{ categories, tokens, categorized, categorize }} />)
    this.tokens = this.component.find(Token)
  })

  it('initializes tokens as uncategorized', () => {
    expect(this.tokens.length).to.eql(5)
  })

  it('categorizes elem #i when it is clicked', () => {
    this.tokens.forEach((token, i: number) => {
      token.simulate('click')
      expect(this.categorize).to.have.been.called.with(i)
    })
    expect(this.categorize).to.not.have.been.called.with(this.tokens.length)
  })
})
