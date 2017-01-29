const R = require('ramda')
const path = require('path')
const merge = require('webpack-merge')

const testLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'ts',
  }, {
    test: /\.css$/,
    include: path.resolve('./src/app'),
    loaders: [
      'style',
      'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
      'postcss'
    ],
  }
]

const config = {
  loaders: R.concat(require('./loaders-shared'), testLoaders),

  postLoaders: [
    {
      test: /\.tsx?$/,
      loader: 'istanbul-instrumenter',
      include: path.resolve('./src/app'),
    },
  ],
}

module.exports = merge(
  config,
  require('./base')
)
