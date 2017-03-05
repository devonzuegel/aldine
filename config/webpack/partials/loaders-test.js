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
        test:   /\?raw$/,
        loader: 'raw-loader',
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
      }, {
        test:   /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      }, {
        test:   /\.json$/,
        loader: 'json-loader'
      }
    ],
  },
}
