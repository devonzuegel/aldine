import * as React from 'react'
import * as U     from '~/components/utils'

interface IButton {
  name: string,
  onClick: Function,
}

export const Button = (name: string): IButton => ({
  name,
  onClick: () => document.getElementById(U.spaceToCamel(name)).scrollIntoView(),
})


interface IAreaProps {
  name: string,
  children?: any,
}

type TArea = React.StatelessComponent<IAreaProps>

export const Area: TArea = ({ name, children }: IAreaProps) => (
  <div id={U.spaceToCamel(name)}>
    {children}
  </div>
)
