import * as React from 'react'

interface IButton {
  name: string,
  onClick: Function,
}

export const Button = (name: string): IButton => ({
  name,
  onClick: () => document.getElementById(name).scrollIntoView(),
})


interface IAreaProps {
  name: string,
  children?: any,
}

type TArea = React.StatelessComponent<IAreaProps>

export const Area: TArea = ({ name, children }: IAreaProps) => (
  <div id={name}>
    {children}
  </div>
)
