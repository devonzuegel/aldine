import * as React from 'react'
import * as R     from 'ramda'
import * as U     from '~/components/utils'
import * as classnames from 'classnames'

import { H1 } from '~/components/Typography'

const s = require('./style.css')

const classes = (shade: string) => (
  classnames({
    [s.colorblock]: true,
    [s[shade]]: true,
  })
)

export const Colorblock = () => (
  <div>
    <H1>
      <span className={s.colorblockWrapper}>
        <div className={classes('dark')} />
        <div className={classes('medium')} />
        <div className={classes('light')} />
      </span>
      This is a title
    </H1>
  </div>
)
