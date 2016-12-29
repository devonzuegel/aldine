const path = require('path');

const config = {
  module: {
    loaders: [
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
    ],
  },
}

module.exports = merge(
  config,
  require('./loaders-shared')
);

