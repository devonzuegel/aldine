const R    = require('ramda')
const path = require('path')

const testLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'ts',
    exclude: /node_modules/
  }, {
    test: /\.css$/,
    loaders: [
      'isomorphic-style',
      'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
    ]
  }
]

module.exports = {
  module: {
    loaders: R.concat(require('./loaders-shared'), testLoaders),
  },
}
