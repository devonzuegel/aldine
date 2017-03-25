import * as React             from 'react'
import * as R                 from 'ramda'
import * as classnames        from 'classnames'
import { Link as RouterLink } from 'react-router'

const s = require('./style.css')

interface IProps {
  children?:  any,
  debug?:     boolean,
  emphasis?:  string,
  attitude?:  string,
  faded?:     boolean,
  uppercase?: boolean,
}

const classes = (name: string, { emphasis, debug, attitude, faded, uppercase }: IProps) => (
  classnames({
    [s.typography]:              true,
    [s[name]]:                   true,
    [s.debug]:                   debug,
    [s.faded]:                   faded,
    [s.uppercase]:               uppercase,
    [s[`${name}--${emphasis}`]]: true,
    [s[`${name}--${attitude}`]]: true,
  })
)

const Typography = (Name: string): React.StatelessComponent<IProps> => (props: IProps) => (
  <Name className={classes(Name, props)}>
    {props.children}
  </Name>
)

export const H1: React.StatelessComponent<IProps>    = Typography('h1')
export const H2: React.StatelessComponent<IProps>    = Typography('h2')
export const H3: React.StatelessComponent<IProps>    = Typography('h3')
export const H4: React.StatelessComponent<IProps>    = Typography('h4')
export const H5: React.StatelessComponent<IProps>    = Typography('h5')
export const P:  React.StatelessComponent<IProps>    = Typography('p')
export const Label: React.StatelessComponent<IProps> = Typography('label')

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

export const Code = (props: IProps) => {
  const classes = classnames({
    [s.code]:                    true,
  })

  if (R.not(props.children)) {
    throw Error('Code must have children')
  }

  return (
    <code className={classes}>
      {props.children}
    </code>
  )
}

export const HR = () => <hr className={s.hr} />
