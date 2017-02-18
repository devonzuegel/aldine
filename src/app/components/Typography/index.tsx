import * as React from 'react'
import * as R     from 'ramda'
import * as classnames from 'classnames'

const s = require('./style.css')

export const H1 = (props) => (
  <h1 className={s.h1}>
    {props.children}
  </h1>
)

export const H2 = (props) => (
  <h2 className={s.h2}>
    {props.children}
  </h2>
)

export const H3 = (props) => (
  <h3 className={s.h3}>
    {props.children}
  </h3>
)

export const H4 = (props) => (
  <h4 className={s.h4}>
    {props.children}
  </h4>
)

export const H5 = (props) => (
  <h5 className={s.h5}>
    {props.children}
  </h5>
)
