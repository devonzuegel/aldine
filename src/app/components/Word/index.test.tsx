import * as React from 'react'
import { mount } from 'enzyme'
import * as chai from 'chai'
import * as spies from 'chai-spies'

import Word from './index'
import { EPartOfSpeech } from 'models/part-of-speech'

const s = require('./style.css')

const expect = chai.expect
chai.use(spies)

describe('<Word />', () => {
  beforeEach(() => {
    const props = { word: 'Word', pos: EPartOfSpeech.DT }
    this.component = mount(<Word {...props}/>)
  })

  it('has the word css class', () => {
    expect(this.component.hasClass(s.word)).to.eql(true)
  })
})
