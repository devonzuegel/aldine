var R = require('ramda')

module.exports = (content: string): string => {
  this.cacheable && this.cacheable()
  this.value = content

  return R.pipe(
    R.trim,
    str => `<div>${str}</div>`,
    str => `
      import React from 'react'
      export default ${str}
    `
  )(content)
}
