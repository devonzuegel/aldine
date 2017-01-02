import { IThemeChanger, IThemeChangerAction } from '../../../models/theme-changer'

/** Action Types */
export const UPDATE: string = 'theme-changer/UPDATE'

/** ThemeChanger: Initial State */
const initialState: IThemeChanger = {
  className: null,
}

/** Reducer: ThemeChangerReducer */
export function themeChangerReducer(state = initialState, action?: IThemeChangerAction) {
  switch (action.type) {
    case UPDATE:
      return {
        className: action.className,
      }

    default:
      return state
  }
}

/** Action Creator: Updates the ThemeChanger */
export const update = (className: string): IThemeChangerAction => ({
  type: UPDATE,
  className,
})
