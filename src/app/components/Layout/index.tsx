import * as React      from 'react'
import * as classnames from 'classnames'

const s = require('./style.css')
interface IProps {
  children?: any,
  debug?: boolean,
  leftSide?: any,
  width?: string,
}

type Type = React.StatelessComponent<IProps>

const classes = ({ debug, width }: IProps) => (
  classnames({
    [s.debug]: debug,
    [s[width]]: true,
    [s['flex-1']]: true,
  })
)
export const Layout: Type = (props: IProps) => {
  const Main = (
    <div className={classes(props)}>
      {props.children}
    </div>
  )

  if (!props.leftSide) {
    return Main
  }

  return (
    <div className={s['horizontal-box']}>
      <div className={s.leftSide}>
        {props.leftSide}
      </div>
      {Main}
    </div>
  )
}

Layout.propTypes = {
  width: React.PropTypes.oneOf([ 'wide', 'narrow', 'full' ]),
  leftSide: React.PropTypes.element,
}

Layout.defaultProps = {
  width: 'wide',
}
