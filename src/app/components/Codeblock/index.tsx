import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')

export const Codeblock = (props) => {
  const { children, className, ...otherProps } = props

  const classes = classnames({
    [s.codeblock]: true,
    [className]: true,
  })

  if (R.not(children)) {
    throw Error('Codeblock must have children')
  }

  return (
    <pre {...otherProps} className={classes}>
      {children}
    </pre>
  )
}
