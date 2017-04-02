import * as React      from 'react'
import * as classnames from 'classnames'
import * as U          from '~/components/utils'

const s = require('./style.css')

interface IProps {
  children?: any,
  debug?: boolean,
  emphasis?: string,
  attitude?: string,
}

type Type = React.StatelessComponent<IProps>

const classes = ({ attitude }: IProps): string => (
  classnames({
    [s['alert']]: true,
    [s[`alert--${attitude}`]]: true,
  })
)

export const Alert: Type = (props: IProps) => (
  <div className={classes(props)}>
    {props.children}
  </div>
)

Alert.propTypes = U.propTypes({
  children: React.PropTypes.any.isRequired,
})

Alert.defaultProps = U.defaultProps()
