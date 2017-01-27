import * as React from 'react'
import * as classnames from 'classnames'
import { IThemeChanger } from '~/models/theme-changer'

const s = require('./style.css')

interface ITheme {
  title: string,
  className: string,
}

export interface IProps {
  themeChanger: IThemeChanger,
  update: Redux.ActionCreator,
  themes: ITheme[],
}

const ThemeOption = ({ update, title, className, themeChanger }) => {
  const classNames =
    classnames({
      // [s.codeblock]:     true,
      [s.themeSelector]: true,
      [s.active]:        themeChanger.className === className,
    })

  return (
    <div onClick={() => update(className)} className={classNames}>
      {title}
    </div>
  )
}
export const ThemeChanger = (props: IProps) => {
  const { update, themes, themeChanger } = props

  return (
    <div className={s.themeChanger}>
      <h1>ThemeChanger Example</h1>

      {themes.map(({ title, className }, i) =>
        <ThemeOption {...{ update, title, className, themeChanger }} key={i} />
      )}

    </div>
  )
}
