module.exports = {
  test: /\.css$/,
  loaders: [
    'isomorphic-style-loader',
    'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
  ],
}
