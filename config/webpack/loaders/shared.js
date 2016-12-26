var path = require('path');

module.exports = [
  {
    test: /\.jsx$/,
    loader: 'babel?presets[]=es2015'
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }, {
    test: /\.eot(\?.*)?$/,
    loader: 'file?name=fonts/[hash].[ext]'
  }, {
    test: /\.(woff|woff2)(\?.*)?$/,
    loader: 'file-loader?name=fonts/[hash].[ext]'
  }, {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
  }, {
    test: /\.svg(\?.*)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loader: 'url?limit=1000&name=images/[hash].[ext]'
  }
]
