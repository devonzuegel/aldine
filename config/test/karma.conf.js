var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
const merge = require('webpack-merge');
var appConfig = require('../main');

var webpackConfig = {
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
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loaders: [
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss'
        ]
      }, {
        test: /\.css$/,
        exclude: path.resolve('./src/app'),
        loader: 'style!css'
      }, {
        test: /\?raw$/,
        loader: 'raw-loader'
      }
    ],
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
    ];
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
};

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

    reporters: ['progress'],

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    hostname: appConfig.host,

    port: appConfig.karmaPort,

    colors: true,

    logLevel: config.LOG_INFO,

    concurrency: Infinity,

    webpack: merge(webpackConfig),

    webpackServer: {
      noInfo: true
    }
  };

  if (process.env.NODE_ENV === 'ci') {
    conf.browsers.push('Firefox');
    conf.coverageReporter.reporters.push({ type: 'lcov', subdir: '.' });
  } else {
    conf.coverageReporter.reporters.push({ type: 'html', subdir: 'html' });
    conf.browsers.push('Chrome');
  }

  config.set(conf);
};
