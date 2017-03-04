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
    test:   /\.eot(\?.*)?$/,
    loader: 'file-loader?name=fonts/[hash].[ext]'
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
    test:   /\.ttf(\?.*)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
  }, {
    test:   /\.json$/,
    loader: 'json-loader',
  }, {
    test:   /\?raw$/,
    loader: 'raw-loader',
  }
]
