import { expect } from 'chai'
import * as taggedProse from './'
import { ITaggedProse, ITaggedProseAction } from '~/models/tagged-prose'
import { ITokenCategories } from '~/models/token-categories'

const nocategory = 'nocategory'
const category = 'category'
const categories: ITokenCategories = {
  [category]: category,
  [nocategory]: nocategory,
}

/** Module */
describe('TaggedProse Module', () => {

  /** Actions */
  describe('Actions', () => {
    describe('Update', () => {
      it('has the correct type', () => {
        const action: ITaggedProseAction = taggedProse.categorize(0)
        expect(action.type).to.equal(taggedProse.CATEGORIZE)
      })
    })
  })

  /** Reducer */
  describe('Reducer', () => {

    const initialState: ITaggedProse = {
      categorized: [nocategory, nocategory],
      selectedCategory: category,
      categories,
    }

    it('handles action of type CATEGORIZE', () => {
      const action: ITaggedProseAction = {
        type: taggedProse.CATEGORIZE,
        index: 0,
      }
      expect(taggedProse.taggedProseReducer(initialState, action)).to.be.eql({
        categorized: [category, nocategory],
        selectedCategory: category,
        categories,
      })
    })

    it('handles actions with unknown type by returning current initialState', () => {
      const unknownAction = { type: '', index: 0, category }
      expect(taggedProse.taggedProseReducer(initialState, unknownAction)).to.be.eql(initialState)
    })
  })
})
