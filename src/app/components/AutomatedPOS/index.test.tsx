import * as React from 'react'
import * as R     from 'ramda'
import { mount  } from 'enzyme'
import { expect } from 'chai'

import { klass        } from '~/components/TestHelper'
import { AutomatedPOS } from './index'

const s = require('./style.css')

const txt       = 'This is a sentence.'
const component = mount(<AutomatedPOS text={txt} />)

describe('<AutomatedPOS />', () => {
  it('renders the expected text', () => {
    expect(component.text()).to.eql(txt)
  })

  it('has the expected number of separators', () => {
    expect(component.find(klass(s.separator)).length).to.eql(4)
  })

  it('has the expected words', () => {
    const words = component.find(klass(s.word))
    const wordsTxt = words.map(w => w.text())
    expect(wordsTxt).to.eql([ 'This', 'is', 'a', 'sentence', '.' ])
  })

  it('has the expected parts of speech', () => {
    const posMap: {[key:string]: string[]} = {
      VBZ: [ 'is' ],
      DT:  [ 'This', 'a' ],
      NN:  [ 'sentence' ],
    }
    R.keys(posMap).map((className: string) => {
      const words = component.find(klass(s[className]))
      const wordsTxt: string[] = words.map(w => w.text())
      expect(wordsTxt).to.eql(posMap[className])
    })
  })
})
