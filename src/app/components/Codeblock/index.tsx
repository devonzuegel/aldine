import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')

interface IProps {
  children?: any
  className?: string
}

export const Codeblock = ({ children, className = '' }: IProps) => {
  const classes = classnames({
    [s.codeblock]: true,
    [className]:   true,
  })

  if (R.not(children)) {
    throw Error('Codeblock must have children')
  }

  return (
    <pre className={classes}>
      {children}
    </pre>
  )
}
