/** Loaders shared by all webpack configs (server-side, client-side, prod, and dev) */

const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = [
  {
    test:   /\.jsx$/,
    loader: 'babel-loader?presets[]=es2015presets[]=react'
  }, {
    test:   /\.(jpe?g|png|gif)$/i,
    loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
  }, {
    test:   /\.svg(\?.*)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
  }, {
    test:   /\.(woff|woff2)(\?.*)?$/,
    loader: 'url-loader',
      options: {
        limit:      50000,
        mimetype:   'application/font-woff',
        name:       './fonts/[hash].[ext]',
        publicPath: path.join(rootDir, 'fonts'),
     },
  }, {
    test:   /\?raw$/,
    loader: 'raw-loader',
  }
]
