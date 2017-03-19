import * as e6p from 'es6-promise'
(e6p as any).polyfill()
import 'isomorphic-fetch'

import * as React                     from 'react'
import * as ReactDOMServer            from 'react-dom/server'
import { Provider                   } from 'react-redux'
import { createMemoryHistory, match } from 'react-router'
import { syncHistoryWithStore       } from 'react-router-redux'

const ReduxConnect = require('redux-connect')
const path         = require('path')
const Chalk        = require('chalk')
const express      = require('express')
const app          = express()

import routes             from '~/routes'
import { Html           } from '~/components/Html'
import { configureStore } from '~/redux/store'

const appConfig = require('../config/main')
const manifest  = require('../build/manifest.json')


const renderPage = (renderProps: any, store: any, res: any) => {
  const asyncRenderData = Object.assign({}, renderProps, { store })

  ReduxConnect.loadOnServer(asyncRenderData).then(() => {
    const markup = ReactDOMServer.renderToString(
      <Provider store={store} key='provider'>
        <ReduxConnect.ReduxAsyncConnect {...renderProps} />
      </Provider>
    )
    const html = ReactDOMServer.renderToString(
      <Html markup={markup} manifest={manifest} store={store} />
    )
    res.status(200).send(`<!doctype html> ${html}`)
  })
}

const devSetup = () => {
  const webpackConfig   = require('../config/webpack/partials/client-dev')
  const webpackCompiler = require('webpack')(webpackConfig)

  app.use(require('webpack-dev-middleware')(webpackCompiler, {
    publicPath:         webpackConfig.output.publicPath,
    stats:              { colors: true },
    noInfo:             true,
    hot:                true,
    inline:             true,
    lazy:               false,
    historyApiFallback: true,
    quiet:              true,
  }))

  app.use(require('webpack-hot-middleware')(webpackCompiler))
}

const router = (req: any, res: any) => {
  const location      = req.url
  const memoryHistory = createMemoryHistory(req.originalUrl)
  const store         = configureStore(memoryHistory)
  const history       = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
      return
    }

    if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      return
    }

    if (renderProps) {
      renderPage(renderProps, store, res)
      return
    }

    res.status(404).send('Not Found?')
  })
}

if (process.env.NODE_ENV !== 'production') {
  devSetup()
}
app.use(require('compression')())
app.use(require('serve-favicon')(path.join(__dirname, '../src/assets/favicon.ico')))
app.use('/public', express.static(path.join(__dirname, '../build/public')))
app.get('*', router)
app.listen(appConfig.port, appConfig.host, (error: string) => {
  if (error) {
    console.error(Chalk.bgRed(error))
    return
  }
  console.info(Chalk.black.bgGreen(`\n\nListening at http://${appConfig.host}:${appConfig.port}\n`))
})
