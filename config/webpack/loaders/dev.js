var path = require('path');

module.exports = [
  ...require('./shared'),
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
]
