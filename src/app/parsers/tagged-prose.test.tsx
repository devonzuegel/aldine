import * as R from 'ramda'
import * as React from 'react'
import { expect } from 'chai'

import { p } from '../helpers/TestHelper'
import parse, { mapper, tokenizer } from './tagged-prose'

const plainTxt = 'This is some plain text'
const TAGS = {
  '**': 'noun',
  __:   'verb',
}

describe('Tagged Prose', () => {
  describe('Parser', () => {
    it('Wraps plain text in a div', () => {
      expect(parse(TAGS)(plainTxt)).eql(
        <div>
          {[ <span className="" key={0}>{plainTxt}</span> ]}
        </div>
      )
    })

    it('Parses annotated text', () => {
      expect(parse(TAGS)('This is some **annotated** text')).eql(
        <div>
          <span key={0} className="">This is some </span>
          <span key={1} className="noun">annotated</span>
          <span key={2} className=""> text</span>
        </div>
      )
    })
  })

  describe('Tokenizer', () => {
    it('Maps a plain string to a single element array containing just that string', () => {
      expect(tokenizer(TAGS)(plainTxt)).eql( [plainTxt] )
    })

    it('Maps a plain string to a single element array containing just that string', () => {
      expect(tokenizer(TAGS)('This is some **annotated** text')).eql(
        ['This is some ', '**', 'annotated', '**', ' text']
      )
    })
  })

  describe('Mapper', () => {
    it('Maps a plain string to a single element array containing just that string', () => {
      expect(mapper(TAGS)(plainTxt)).eql(
        [{ content: plainTxt, classNames: { noun: false, verb: false } }]
      )
    })

    it('Maps a plain string to a single element array containing just that string', () => {
      expect(mapper(TAGS)('This is some **annotated** text')).eql(
        [
          { content: 'This is some ', classNames: { noun: false, verb: false } },
          { content: 'annotated',     classNames: { noun: true,  verb: false } },
          { content: ' text',         classNames: { noun: false, verb: false } },
        ]
      )
    })

    it('Maps a plain string to a single element array containing just that string', () => {
      expect(mapper(TAGS)('This is some **annotated** __text__')).eql(
        [
          { content: 'This is some ', classNames: { noun: false, verb: false } },
          { content: 'annotated',     classNames: { noun: true,  verb: false } },
          { content: ' ',             classNames: { noun: false, verb: false } },
          { content: 'text',          classNames: { noun: false, verb: true  } },
        ]
      )
    })
  })
})
