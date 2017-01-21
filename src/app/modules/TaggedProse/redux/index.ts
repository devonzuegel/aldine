import * as R from 'ramda'
import { ITaggedProse, ITaggedProseAction } from '~/models/tagged-prose'
import { ITokenCategories } from '~/models/token-categories'
const s = require('~/components/TaggedProse/style.css')

/** Action Types */
export const CATEGORIZE: string = 'tagged-prose/CATEGORIZE'
export const SELECT: string = 'tagged-prose/SELECT'

const categories: ITokenCategories = {
  category1: s.category1,
  category2: s.category2,
  uncategorized: s.uncategorized,
}

/** TaggedProse: Initial State */
const initialState: ITaggedProse = {
  categorized: [],
  selectedCategory: R.head(R.keys(categories)),
  categories,
}

/** Reducer: TaggedProseReducer */
export function taggedProseReducer(state = initialState, action?: ITaggedProseAction) {
  switch (action.type) {
    case CATEGORIZE:
      const i = action.index
      const category = state.selectedCategory
      let updated: string[] = state.categorized
      updated[i] = state.categorized[i] === category ? null : category
      return R.merge(state, { categorized: updated })

    case SELECT:
      return R.merge(state, { selectedCategory: action.category })

    default:
      return state
  }
}

/** Action Creator: Categorizes a TaggedProse Token */
export const categorize = (index: number): ITaggedProseAction => ({
  type: CATEGORIZE,
  index,
})


/** Action Creator: Updates the selected TaggedProse category */
export const select = (category: string): ITaggedProseAction => ({
  type: SELECT,
  category,
})
