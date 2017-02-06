import * as React from 'react'
import { expect } from 'chai'

import tagPOS from './part-of-speech'

const plainTxt = 'This is some plain text'

describe('Tagged Prose', () => {
  it('..', () => {
    expect(tagPOS(plainTxt)).eql([
      { word: 'This',  pos: 'DT'  },
      { word: 'is',    pos: 'VBZ' },
      { word: 'some',  pos: 'DT'  },
      { word: 'plain', pos: 'JJ'  },
      { word: 'text',  pos: 'NN'  },
    ])
  })
})
