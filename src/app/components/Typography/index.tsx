import * as React from 'react'
import * as classnames from 'classnames'
import { Link as RouterLink } from 'react-router'

const s = require('./style.css')

interface IProps {
  children?: any,
  debug?: boolean,
  emphasis?: string,
  attitude?: string,
  faded?: boolean,
  uppercase?: boolean,
}

type Type = React.StatelessComponent<IProps>

const classes = (name, { emphasis, debug, attitude, faded, uppercase }: IProps) => (
  classnames({
    [s.typography]: true,
    [s[name]]: true,
    [s.debug]: debug,
    [s.faded]: faded,
    [s.uppercase]: uppercase,
    [s[`${name}--${emphasis}`]]: true,
    [s[`${name}--${attitude}`]]: true,
  })
)

const Typography = (Name): Type => (props: IProps) => (
  <Name className={classes(Name, props)}>
    {props.children}
  </Name>
)

export const H1    = Typography('h1')
export const H2    = Typography('h2')
export const H3    = Typography('h3')
export const H4    = Typography('h4')
export const H5    = Typography('h5')
export const Label = Typography('label')
export const P     = Typography('p')

interface IAProps extends IProps {
  href?: string,
  to?: string,
}

export const A = (props: IAProps) => (
  !!props.to
  ?
  <div className={classes('link', props)}>
    <RouterLink to={props.to} className={classes('a', props)}>
      {props.children}
    </RouterLink>
  </div>
  :
  <a className={classes('a', props)}>
    {props.children}
  </a>
)

export const Markdown = (props: IProps) => (
  <div className={s.markdown}>
    {props.children}
  </div>
)

export const HR = () => <hr className={s.hr} />

