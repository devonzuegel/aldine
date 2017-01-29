const path              = require('path')
const webpack           = require('webpack')
const postcssAssets     = require('postcss-assets')
const postcssNext       = require('postcss-cssnext')
const stylelint         = require('stylelint')
const ManifestPlugin    = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge             = require('webpack-merge')

const config = {
  bail: true,

  entry: {
    app: './src/client.tsx',
    vendor: [
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
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].[chunkhash].js'
  },

  tslint: { failOnHint: true },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].[hash].css'),
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

module.exports = merge(
  config,
  require('./partials/aliases'),
  require('./partials/loaders-prod')
)

