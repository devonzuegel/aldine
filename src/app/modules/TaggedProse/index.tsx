import * as React from 'react'
const { connect } = require('react-redux')

import { ITokenCategories } from 'models/token-categories'
import CategorySelector from 'components/CategorySelector'
import * as C from 'components/TaggedProse'

import * as actions from './redux'


const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
const tokens = text.split(' ')

export interface IProps {
  categories: ITokenCategories,
  tokens: string[],
  categorize: Function,
  select: Function,
  taggedProse: any,
}

@connect(
  state => ({ taggedProse: state.taggedProse }),
  dispatch => ({
    categorize: (i: number) => () => dispatch(actions.categorize(i)),
    select: (category: string) => () => dispatch(actions.select(category)),
  })
)
export class TaggedProse extends React.Component<IProps, void> {
  public render() {
    const { categorize, select } = this.props
    const { categorized, selectedCategory, categories } = this.props.taggedProse
    return (
      <div>
        <CategorySelector
          {...{ categories, select }}
          selected={selectedCategory}
        />
        <C.TaggedProse {...{ tokens, categorize, categories, categorized }} />
      </div>
    )
  }
}
