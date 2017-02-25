import * as React                  from 'react'
import * as R                      from 'ramda'
import * as classnames             from 'classnames'
import { propTypes, defaultProps } from '~/components/utils'

const s = require('./style.css')

interface IProps {
  children?: any,
  debug?: boolean,
  emphasis?: string,
  attitude?: string,
 }

const classes = ({ emphasis, debug, attitude }: IProps) => classnames({
  [s['debug']]: debug,
  [s['section']]: true,
  [s[`section--${emphasis}--${attitude}`]]: true,
})

export const Section: React.StatelessComponent<IProps> = (props: IProps) => (
  <div className={classes(props)}>
    {props.children}
  </div>
)

Section.propTypes = propTypes({
  children: React.PropTypes.any.isRequired,
})

Section.defaultProps = defaultProps()
