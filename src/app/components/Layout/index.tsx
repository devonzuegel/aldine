import * as React      from 'react'
import * as classnames from 'classnames'

import * as Width from '~/models/Width.ts'

const s = require('./style.css')

interface IProps {
  children?: any,
  debug?:    boolean,
  leftSide?: JSX.Element,
  width?:    Width.Type,
}

type TLayout = React.StatelessComponent<IProps>

export const Layout: TLayout = ({ width = 'medium', debug, children, leftSide }) => {
  const classes = classnames({
    [s.debug]: debug,
    [s[width]]: true,
    [s['flex-1']]: true,
  })

  const Main = (
    <div className={classes}>
      {children}
    </div>
  )

  if (!leftSide) {
    return Main
  }

  return (
    <div className={s['horizontal-box']}>
      {leftSide}
      {Main}
    </div>
  )
}
