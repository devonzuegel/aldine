const path = require('path')
const merge = require('webpack-merge')

const config = {
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'react-hot-loader!awesome-typescript-loader',
      },
    ],
  },
}

module.exports = merge(
  config,
  require('./base')
)

