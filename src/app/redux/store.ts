import { routerMiddleware } from 'react-router-redux'
import * as Redux           from 'redux'
import thunk                from 'redux-thunk'
import rootReducer          from './reducers'

const createLogger = require('redux-logger')
const appConfig    = require('../../../config/main')

export const configureStore = (history, initialState?: Redux.Store<any>): Redux.Store<any> => {

  const middlewares: Redux.Middleware[] = [
    routerMiddleware(history),
    thunk,
  ]

  /** Add Only Dev. Middlewares */
  if (appConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger()
    middlewares.push(logger)
  }

  const composeEnhancers = (
    appConfig.env !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || Redux.compose

  const store = Redux.createStore(
    rootReducer,
    initialState,
    composeEnhancers(Redux.applyMiddleware(...middlewares))
  )

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'))
    })
  }

  return store
}
