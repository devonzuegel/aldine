const path = require('path')
const merge = require('webpack-merge')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.(woff|woff2)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit:      50000,
          mimetype:   'application/font-woff',
          name:       './fonts/[hash].[ext]',
          publicPath: projectRoot('fonts'),
        },
      }, {
      // // TODO: put me back
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   loader: 'tslint-loader'
      // }, {
        test:    /\.tsx?$/,
        loader:  'awesome-typescript-loader',
        options: { useCache: false },
      }, {

        test:    /\.css$/,
        include: projectRoot('app'),
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      }
    ],
  },
}
