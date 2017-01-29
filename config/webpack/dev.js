const path           = require('path')
const webpack        = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const merge          = require('webpack-merge')
const rootDir        = path.resolve('./src')

const config = {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/client.tsx',
      './src/vendor/main.ts'
    ]
  },

  output: {
    path:       path.resolve('./build/public'),
    publicPath: '/public/',
    filename:   'js/[name].js',
    pathinfo:   true
  },

  tslint:  { failOnHint: true },
  devtool: 'eval',
  debug:   true,

  plugins: [
    new ManifestPlugin({ fileName: '../manifest.json' }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = require('webpack-merge')(
  config,
  require('./partials/aliases'),
  require('./partials/loaders-dev')
)
