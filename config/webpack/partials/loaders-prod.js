const path = require('path')
const utils = require('../../utils')

const loaders = [
  {
    test: /\.tsx?$/,
    loader: 'ts'
  }, {
    test: /\.css$/,
    include: path.resolve('./src/app'),
    loader: ExtractTextPlugin.extract(
      'style',
      'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
      'postcss'
    )
  }, {
    test: /\.css$/,
    exclude: path.resolve('./src/app'),
    loader: ExtractTextPlugin.extract('style', 'css')
  },
],

module.exports = merge(
  utils.wrapLoaders(loaders),
  require('./base')
)

