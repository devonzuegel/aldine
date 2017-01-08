import * as React from 'react'
import * as classnames from 'classnames'
import { update } from '../../redux/modules/theme-changer/'
import { IThemeChanger } from '../../models/theme-changer'
const { connect } = require('react-redux')
const s = require('./style.css')

interface ITheme {
  title: string,
  className: string,
}

interface IProps {
  themeChanger: IThemeChanger,
  update: Redux.ActionCreator,
  themes: ITheme[],
}

export const ThemeChangerComponent = (props: IProps) => {
  const { update, themes, themeChanger } = props
  const curriedUpdate = (theme: string) => () => update(theme)

  const classNames = (c) =>
    classnames({
      [s.themeSelector]: true,
      [s.active]: themeChanger.className === c,
    })
  return (
    <div className={s.themeChanger}>
      <h1>ThemeChanger Example</h1>

      {themes.map(({ title, className }, i) => (
        <div
          key={i}
          onClick={curriedUpdate(className)}
          className={classNames(className)}
        >
          <code>{title}</code>
        </div>
      ))}

    </div>
  )
}

@connect(
  state => ({ themeChanger: state.themeChanger }),
  dispatch => ({
    update: (className: string) => dispatch(update(className)),
  })
)
class ThemeChanger extends React.Component<IProps, void> {

  public render() {
    return <ThemeChangerComponent {...this.props} />
  }
}

export { ThemeChanger }
