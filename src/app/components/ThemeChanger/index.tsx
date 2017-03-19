import * as React from 'react'
import * as classnames from 'classnames'
import { Codeblock } from '~/components/Codeblock'
import { IThemeChanger } from '~/models/theme-changer'

const s = require('./style.css')

interface ITheme {
  title: string,
  className: string,
}

interface IThemeOptionProps {
  update: Redux.ActionCreator<any>
  title: string
  className: string
  themeChanger: IThemeChanger
}

const ThemeOption = ({ update, title, className, themeChanger }: IThemeOptionProps) => {
  const classNames = classnames({
    [s.themeSelector]: true,
    [s.active]:        themeChanger.className === className,
  })

  return (
    <div onClick={() => update(className)}>
      <Codeblock className={classNames}>
        {title}
      </Codeblock>
    </div>
  )
}

export interface IProps {
  themeChanger: IThemeChanger
  update: Redux.ActionCreator<any>
  themes: ITheme[]
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
