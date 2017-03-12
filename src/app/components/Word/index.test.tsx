import * as React from 'react'
import { mount }  from 'enzyme'
import * as chai  from 'chai'
import * as spies from 'chai-spies'

import Word from './index'
import { EPartOfSpeech } from '~/models/part-of-speech'

const s = require('./style.css')

const expect = chai.expect
chai.use(spies)

const component = mount(<Word word='Word' pos={EPartOfSpeech.DT} />)

describe('<Word />', () => {
  it('has the word css class', () => {
    expect(component.hasClass(s.word)).to.eql(true)
  })
})
