const R    = require('ramda')
const path = require('path')
const merge = require('webpack-merge')

const rootDir = path.resolve('./src')

const testLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader',
    exclude: /node_modules/
  }, {
    test: /\.css$/,
    loaders: [
      'isomorphic-style-loader',
      'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
    ]
  }, {
    test: /\.css$/,
    include: path.resolve('./src/app'),
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('postcss-import')({ path: [ path.join(rootDir, 'app', 'styles') ] }),
          ],
        },
      },
    ],
  }
]

module.exports = {
  module: {
    loaders: R.concat(require('./loaders-shared'), testLoaders),
  },
}

