import { combineReducers     } from 'redux'
import { routerReducer       } from 'react-router-redux'
import { counterReducer      } from '~/modules/Counter/redux'
import { themeChangerReducer } from '~/modules/ThemeChanger/redux'
import { taggedProseReducer  } from '~/modules/TaggedProse/redux'

const { reducer } = require('redux-connect')

const rootReducer: Redux.Reducer = combineReducers({
  routing:           routerReducer,
  counter:           counterReducer,
  themeChanger:      themeChangerReducer,
  taggedProse:       taggedProseReducer,
  reduxAsyncConnect: reducer,
})

export default rootReducer
