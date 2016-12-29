import * as React from 'react'
// import * as R from 'ramda'
import { expect } from 'chai'

const md  = require('./fixture.md?tagged-prose').default
const txt = 'This is some content to parse.'

describe('Tagged Prose Loader', () => {
  it('Wraps the content in a div', () => {
    expect(md).eql(<div>{txt}</div>)
  })
})
