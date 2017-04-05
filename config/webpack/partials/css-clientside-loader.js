const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = {
  test:    /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      { loader: 'css-loader', options: { importLoaders: 3, sourceMap: true, modules: true } },
      'resolve-url-loader',
      'postcss-loader',
    ],
  }),
}
