import * as React from 'react'

import { parse, INode } from '~/parsers/parenthetical'

interface IProps {
  text: string
}

type Type = React.StatelessComponent<IProps>

const formatted = (node: INode): any => {
  /* Typescript requires string typecheck, despite the fact that if it's a TextNode then
   * content will definitely be a string. The compiler just can't figure that out. :( */
  if (node.type === 'Text' || typeof node.content === 'string') {
    return node.content
  }
  return (
    <span style={{ opacity: 0.5 }}>
      ({node.content.map(formatted)})
    </span>
  )
}

export const Parenthetical: Type = ({ text }: IProps) => (
  <div>
    {parse(text).map(formatted)}
  </div>
)
