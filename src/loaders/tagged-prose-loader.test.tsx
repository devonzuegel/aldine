import * as React from 'react'
import { expect } from 'chai'

const md  = require('./fixture.md?tagged-prose').default
const txt = 'This is some content to parse.'

describe('Tagged Prose Loader', () => {
  it('Wraps the content in a div', () => {
    const className = 'red'
    expect(md(className)).eql(
      <div>
        {'This is some '}
        <span className={className} key={1}>content to</span>
        {' parse.'}
      </div>
    )
  })
})
