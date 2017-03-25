import * as React from 'react'
import * as U     from '~/components/utils'

const scrollIntoView = (id: string) => {
  const elem = document.getElementById(id)
  if (!elem) {
    throw Error(`Element with id ${id} is not defined`)
  }
  elem.scrollIntoView()
}

interface IButton {
  name: string,
  onClick: Function,
}

export const Button = (name: string): IButton => ({
  name,
  onClick: () => scrollIntoView(U.spaceToCamel(name)),
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
