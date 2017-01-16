import * as R from 'ramda'
import { ITaggedProse, ITaggedProseAction } from '~/models/tagged-prose'

/** Action Types */
export const CATEGORIZE: string = 'tagged-prose/CATEGORIZE'

/** TaggedProse: Initial State */
const initialState: ITaggedProse = {
  categorized: [],
  selectedCategory: 'category1',
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

    default:
      return state
  }
}

/** Action Creator: Updates the TaggedProse */
export const categorize = (index: number): ITaggedProseAction => ({
  type: CATEGORIZE,
  index,
})
