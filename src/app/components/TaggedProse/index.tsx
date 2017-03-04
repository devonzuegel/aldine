import * as React from 'react'
import { ITokenCategories } from 'models/token-categories'
import Token from 'components/Token'

export interface IProps {
  categories: ITokenCategories,
  tokens: string[],
  categorize: Function,
  categorized: string[],
}

export const TaggedProse = (props: IProps) => {
  const { categories, tokens, categorize, categorized } = props

  return (
    <div>
      {tokens.map((t: string, i: number) =>
        <span key={i}>
          {i !== 0 && ' ' /* Add space between tokens split on space */}
          <Token categorize={categorize(i)} className={categories[categorized[i]]}>
            {t}
          </Token>
        </span>
      )}
    </div>
  )
}
