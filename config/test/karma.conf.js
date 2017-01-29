const path          = require('path')
const webpack       = require('webpack')
const postcssAssets = require('postcss-assets')
const postcssNext   = require('postcss-cssnext')
const merge         = require('webpack-merge')
const appConfig     = require('../main')
const rootDir       = path.resolve('./src')

const webpackConfig = {
  devtool: 'inline-source-map',

  resolve: {
    root: path.resolve(__dirname),
    modulesDirectories: [
      '../../src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.tsx?$/,
        loader: 'tslint'
      }
    ],
    loaders: require('../webpack/partials/loaders-test'),
    postLoaders: [
      {
        test: /\.tsx?$/,
        loader: 'istanbul-instrumenter-loader',
        include: path.resolve('./src/app')
      }
    ]
  },

  postcss: function () {
    return [
      postcssNext(),
      postcssAssets({ relative: true })
    ]
  },

  tslint: {
    failOnHint: false
  },

  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window'
  },

  plugins: [
    new webpack.IgnorePlugin(/^fs$/),
    new webpack.IgnorePlugin(/^react\/addons$/),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}

module.exports = function (config) {
  const conf = {
    frameworks: ['mocha', 'chai', 'es6-shim'],

    browsers: ['PhantomJS'],

    files: ['../webpack/test.js'],

    preprocessors: {
      '../src/**/*.ts': ['coverage'],
      '../src/**/*.tsx': ['coverage'],
      '../webpack/test.js': ['webpack']
    },

    plugins: ['karma-*'],

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    hostname: appConfig.host,

    port: appConfig.karmaPort,

    colors: true,

    logLevel: config.LOG_INFO,

    concurrency: Infinity,

    webpack: merge(webpackConfig, require('../webpack/partials/aliases')),

    webpackServer: {
      noInfo: true
    }
  }

  if (process.env.NODE_ENV === 'ci') {
    conf.browsers.push('Firefox')
    conf.coverageReporter.reporters.push({ type: 'lcov', subdir: '.' })
  } else {
    conf.coverageReporter.reporters.push({ type: 'html', subdir: 'html' })
    conf.browsers.push('Chrome')
  }

  config.set(conf)
}
