import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')
const hljsStyles = require('raw-loader!./hljs-typescript.txt')

interface IProps {
  children?: any
  className?: string
  dark?: boolean,
  highlight?: boolean,
}

type TCodeblock  = React.StatelessComponent<IProps>
export const Codeblock: TCodeblock = ({ children, className, dark, highlight }) => {
  const classes = classnames({
    [s.codeblock]:     true,
    [s.dark]:          dark,
    [className || '']: true,
  })

  if (R.not(children)) {
    throw Error('Codeblock must have children')
  }

  return (
    <pre className={classes}>
      {highlight && <style>{hljsStyles}</style>}
      {children}
    </pre>
  )
}
