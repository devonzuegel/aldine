import { expect } from 'chai'

import {
  parse,
  ParentheticalNode as PNode,
  TextNode as TNode,
} from './parenthetical'

describe('ParentheticalNode', () => {
  it('handles text content', () => {
    expect(PNode('text')).eql({ type: 'Parenthetical', content: 'text' })
  })

  it('handles empty Node array content', () => {
    expect(PNode([])).eql({ type: 'Parenthetical', content: [] })
  })

  it('handles empty Node array content', () => {
    expect(PNode([ TNode('qux') ])).eql({
      type:    'Parenthetical',
      content: [ TNode('qux') ],
   })
  })
})

describe('TextNode', () => {
  it('handles text content', () => {
    expect(TNode('text')).eql({ type: 'Text', content: 'text' })
  })

  it('handles empty Node array content', () => {
    expect(TNode([])).eql({ type: 'Text', content: [] })
  })
})

describe('parse', () => {
  it('parses a simple parenthetical', () => {
    expect(parse('foo (bar) baz')).eql([
      TNode('foo '),
      PNode([ TNode('bar') ]),
      TNode(' baz'),
    ])
  })

  it('parses a nested parenthetical', () => {
    expect(parse('foo (bar (baz) qux) corge')).eql([
      TNode('foo '),
      PNode([
        TNode('bar '),
        PNode([ TNode('baz') ]),
        TNode(' qux'),
      ]),
      TNode(' corge'),
    ])
  })
})
