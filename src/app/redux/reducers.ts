import { combineReducers     } from 'redux'
import { routerReducer       } from 'react-router-redux'
import { counterReducer      } from './modules/counter'
import { themeChangerReducer } from './modules/theme-changer'
import { taggedProseReducer  } from './modules/tagged-prose'
const { reducer } = require('redux-connect')

const rootReducer: Redux.Reducer = combineReducers({
  routing:           routerReducer,
  counter:           counterReducer,
  themeChanger:      themeChangerReducer,
  taggedProse:       taggedProseReducer,
  reduxAsyncConnect: reducer,
})

export default rootReducer
