import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')

export const Codeblock = (props) => {
  const classes = classnames({
    [s.codeblock]: true,
  })

  if (R.not(props.children)) {
    throw Error('Codeblock must have children')
  }

  return (
    <pre className={classes}>
      {props.children}
    </pre>
  )
}
