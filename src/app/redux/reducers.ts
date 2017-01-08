import { combineReducers     } from 'redux'
import { routerReducer       } from 'react-router-redux'
import { counterReducer      } from './modules/counter'
import { themeChangerReducer } from './modules/theme-changer'
const { reducer } = require('redux-connect')

const rootReducer: Redux.Reducer = combineReducers({
  routing:           routerReducer,
  counter:           counterReducer,
  themeChanger:      themeChangerReducer,
  reduxAsyncConnect: reducer,
})

export default rootReducer
