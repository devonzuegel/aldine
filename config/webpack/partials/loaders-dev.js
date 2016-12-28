const path = require('path')
const merge = require('webpack-merge');

const config = {
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'react-hot!ts',
      }, {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },
}

module.exports = merge(
  config,
  require('./loaders-shared')
);

