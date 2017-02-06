import { expect } from 'chai'

import tagPOS from './part-of-speech'

describe('Tagged Prose', () => {
  it('tags a simple sentence', () => {
    expect(tagPOS('This is some plain text')).eql([
      { word: 'This',  pos: 'DT'  },
      { word: 'is',    pos: 'VBZ' },
      { word: 'some',  pos: 'DT'  },
      { word: 'plain', pos: 'JJ'  },
      { word: 'text',  pos: 'NN'  },
    ])
  })

  it('mis-tags a garden path sentence', () => {
    expect(tagPOS('The old man the boat.')).eql([
      { word: 'The',  pos: 'DT' },
      { word: 'old',  pos: 'JJ' },
      { word: 'man',  pos: 'NN' },
      { word: 'the',  pos: 'DT' },
      { word: 'boat', pos: 'NN' },
      { word: '.',    pos: '.'  },
    ])
  })
})
