import { strEnum } from '~/components/utils'

const pegjs   = require('pegjs')
const grammar = require('raw-loader!./parenthetical.peg')


export const Enum = strEnum([ 'Parenthetical', 'Text' ])
export type Type = keyof typeof Enum

export interface INode {
  type: Type
  content: string | INode[]
}

export const ParentheticalNode = (content: string | INode[]): INode => ({
  type: 'Parenthetical',
  content,
})

export const TextNode = (content: string | INode[]): INode => ({
  type: 'Text',
  content,
})

export const parse = (str: string): INode[] => {
  return pegjs.generate(grammar).parse(str)
}

