module.exports = [
  {
    test: /\.jsx$/,
    loader: 'babel?presets[]=es2015presets[]=react'
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loader: 'url?limit=1000&name=images/[hash].[ext]'
  }, {
    test: /\.eot(\?.*)?$/,
    loader: 'file?name=fonts/[hash].[ext]'
  }, {
    test: /\.svg(\?.*)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
  }, {
    test: /\.(woff|woff2)(\?.*)?$/,
    loader: 'file?name=fonts/[hash].[ext]'
  }, {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
  }, {
    test: /\.json$/,
    loader: 'json',
  }, {
    test: /\?raw$/,
    loader: 'raw',
  }
]
