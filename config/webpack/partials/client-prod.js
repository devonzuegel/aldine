const path    = require('path')
const webpack = require('webpack')

const vendor = [
  './src/vendor/main.ts',
  'react',
  'react-dom',
  'react-router',
  'react-helmet',
  'react-redux',
  'react-router-redux',
  'redux',
  'redux-connect',
  'redux-thunk'
]

module.exports = require('webpack-merge')(
  require('./aliases'),
  require('./client-loaders'),
  {
    bail: true,

    entry: {
      app: './src/client.tsx',
      vendor,
    },

    output: {
      path:       path.resolve('./build/public'),
      publicPath: '/public/',
      filename:   'js/[name].[chunkhash].js'
    },

    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name:      'vendor',
        filename:  'js/[name].[chunkhash].js',
        minChunks: Infinity
      }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
      new require('extract-text-webpack-plugin')('css/[name].[hash].css'),
      new require('webpack-manifest-plugin')({ fileName: '../manifest.json' }),
      new webpack.DefinePlugin({
        'process.env': {
          BROWSER:  JSON.stringify(true),
          NODE_ENV: JSON.stringify('production')
        }
      })
    ],
  }
)

