import * as React from 'react'
import * as classnames from 'classnames'
const s = require('./style.css')

interface IProps {
  categorize: Function,
  children?: any,
  className?: string,
}

const Token = (props: IProps) => {
  const { categorize, className, children } = props
  const classes = classnames({
    [s.token]: true,
    [className]: Boolean(className),
  })
  return (
    <span className={classes} onClick={() => categorize()}>
      {children}
    </span>
  )
}

export default Token
