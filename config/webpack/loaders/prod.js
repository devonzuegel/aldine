var path = require('path');

module.exports = [
  ...require('./shared'),
  {
    test: /\.tsx?$/,
    loader: 'ts-loader'
  }, {
    test: /\.css$/,
    include: path.resolve('./src/app'),
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
      'postcss-loader'
    )
  }, {
    test: /\.css$/,
    exclude: path.resolve('./src/app'),
    loader: ExtractTextPlugin.extract(
      'style-loader',
      'css-loader'
    )
  },
]
