const R = require('ramda')

module.exports = (content: string): string => {
  this.cacheable && this.cacheable()
  this.value = content

  return R.pipe(
    R.trim,
    str => `
      import React from 'react'
      import R from 'ramda'

      export default (className) => <div>
        {R.pipe(
          R.split('**'),
          R.reduce(
            ({ highlighting, result, i }, fragment) => ({
              highlighting: !highlighting,
              i: i + 1,
              result: [
                ...result,
                highlighting ? <span className={className} key={i}>{fragment}</span> : fragment
              ]
            }),
            { highlighting: false, result: [], i: 0 }
          ),
          R.prop('result'),
          R.flatten,
        )('${str}')}
      </div>
    `
  )(content)
}
