const path          = require('path')
const webpack       = require('webpack')
const postcssAssets = require('postcss-assets')
const postcssNext   = require('postcss-cssnext')
const merge         = require('webpack-merge')
const appConfig     = require('../main')

const webpackConfig = {
  devtool: 'inline-source-map',

  resolve: {
    root:               path.resolve(__dirname),
    extensions:         ['', '.json', '.js', '.ts', '.tsx', '.jsx'],
    modulesDirectories: [
      '../../src',
      'node_modules'
    ],
  },

  module: require('../webpack/partials/loaders-test'),

  tslint: {
    failOnHint: false
  },

  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext':         'window',
  },

  plugins: [
    new webpack.IgnorePlugin(/^fs$/),
    new webpack.IgnorePlugin(/^react\/addons$/),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER:  JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}

module.exports = config => {
  const c = {
    preprocessors: {
      '../src/**/*.ts':     ['coverage'],
      '../src/**/*.tsx':    ['coverage'],
      '../webpack/test.js': ['webpack'],
    },

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    colors:        true,
    hostname:      appConfig.host,
    port:          appConfig.karmaPort,
    logLevel:      config.LOG_INFO,
    concurrency:   Infinity,
    webpack:       merge(webpackConfig, require('../webpack/partials/aliases')),
    webpackServer: { noInfo: true },
    browsers:      ['PhantomJS'],
    plugins:       ['karma-*'],
    frameworks:    ['mocha', 'chai', 'es6-shim'],
    files:         ['../webpack/test.js'],
  }

  if (process.env.NODE_ENV === 'ci') {
    c.browsers.push('Firefox')
    c.coverageReporter.reporters.push({ type: 'lcov', subdir: '.' })
  } else {
    c.coverageReporter.reporters.push({ type: 'html', subdir: 'html' })
    c.browsers.push('Chrome')
  }

  config.set(c)
}
