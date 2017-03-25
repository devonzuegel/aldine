module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loaders: [
    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
  ]
}
