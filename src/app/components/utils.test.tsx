import { expect } from 'chai'
import * as U     from './utils'

describe('Utils', () => {
  describe('spaceToCamel', () => {
    it('converts spaced to camel', () => {
      expect(U.spaceToCamel('hello my name is dog')).to.eql('helloMyNameIsDog')
    })

    it('converts uppercased, spaced to camel', () => {
      expect(U.spaceToCamel('Hello my name is dog')).to.eql('helloMyNameIsDog')
    })
  })

  describe('Spacing.Enum and Spacing.Type', () => {
    it('allows variable of type Spacing.Type to be the string OR enum value ', () => {
      const Enum = U.strEnum(['up', 'down', 'left', 'right']) /** Create a K:V */
      type Type  = keyof typeof Enum                          /** Create a Type */

      let variable: Type

      variable = Enum.left
      variable = 'left'
      // variable = 'not-a-direction' // This is not allowed
    })

    it('ASFLDKJASDLFKJ', () => {
      const x = ''
      expect(Boolean(x)).to.eql(false)
    })
  })
})
