const path           = require('path')
const webpack        = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const merge          = require('webpack-merge')

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

  devtool: 'eval',

  plugins: [
    new ManifestPlugin({ fileName: '../manifest.json' }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = require('webpack-merge')(
  config,
  require('./aliases'),
  require('./client-loaders')
)
