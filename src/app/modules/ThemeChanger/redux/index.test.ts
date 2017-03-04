import { expect } from 'chai'
import * as themeChanger from './'
import { IThemeChanger, IThemeChangerAction } from 'models/theme-changer'

const className = 'blah-blah'

/** Module */
describe('ThemeChanger Module', () => {

  /** Actions */
  describe('Actions', () => {
    describe('Update', () => {
      it('has the correct type', () => {
        const action: IThemeChangerAction = themeChanger.update(className)
        expect(action.type).to.equal(themeChanger.UPDATE)
      })
    })

  })

  /** Reducer */
  describe('Reducer', () => {

    let state: IThemeChanger = { className: '' }

    it('handles action of type UPDATE', () => {
      const action: IThemeChangerAction = {
        type: themeChanger.UPDATE,
        className,
      }
      expect(themeChanger.themeChangerReducer(state, action)).to.be.eql({ className })
    })

    it('handles actions with unknown type by returning current state', () => {
      expect(themeChanger.themeChangerReducer(state, { type: '', className })).to.be.eql(state)
    })

  })

})
