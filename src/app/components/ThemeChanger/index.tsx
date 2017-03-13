import * as React from 'react'
import * as classnames from 'classnames'
import { Codeblock } from '~/components/Codeblock'
import { IThemeChanger } from '~/models/theme-changer'

const s = require('./style.css')

interface ITheme {
  title: string,
  className: string,
}

export interface IProps {
  themeChanger: IThemeChanger,
  update: Redux.ActionCreator<any>,
  themes: ITheme[],
}

const ThemeOption = ({ update, title, className, themeChanger }) => {
  const classNames =
    classnames({
      [s.themeSelector]: true,
      [s.active]:        themeChanger.className === className,
    })

  return (
    <Codeblock onClick={() => update(className)} className={classNames}>
      {title}
    </Codeblock>
  )
}
export const ThemeChanger = (props: IProps) => {
  const { update, themes, themeChanger } = props

  return (
    <div className={s.themeChanger}>
      {themes.map(({ title, className }, i) =>
        <ThemeOption {...{ update, title, className, themeChanger }} key={i} />
      )}

    </div>
  )
}
