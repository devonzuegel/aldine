import * as React from 'react'
import { mount  } from 'enzyme'
import { expect } from 'chai'

import { MatchParse, Match } from './index'

// const s = require('./style.css')

describe('<MatchParse />', () => {

  it('wraps matches in the corresponding classes', () => {
    const matches: Match[] = [
      {
        test: /\{.*\}/,
        className: 'wrapped',
      },
     ]
     const x = mount(<MatchParse {...{ matches, input: 'x{x}x' }} />)
     expect(x.text()).to.eql('["x","x"]')
  })

})
