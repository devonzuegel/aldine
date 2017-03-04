import * as React      from 'react'
import * as classnames from 'classnames'
import * as U          from 'components/utils'

const s = require('./style.css')

interface IProps {
  children?: any,
  debug?: boolean,
  emphasis?: string,
  attitude?: string,
}

type Type = React.StatelessComponent<IProps>

const classes = ({ emphasis, debug, attitude }: IProps): string => (
  classnames({
    [s['debug']]: debug,
    [s['section']]: true,
    [s[`section--${emphasis}--${attitude}`]]: true,
  })
)

export const Section: Type = (props: IProps) => (
  <div className={classes(props)}>
    {props.children}
  </div>
)

Section.propTypes = U.propTypes({
  children: React.PropTypes.any.isRequired,
})

Section.defaultProps = U.defaultProps()
