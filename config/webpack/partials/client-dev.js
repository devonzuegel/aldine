const path           = require('path')
const webpack        = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = require('webpack-merge')(
  require('./aliases'),
  require('./client-loaders'),
  {
    entry: {
      app: [
        'webpack-hot-middleware/client?reload=true',
        './src/client.tsx',
        './src/vendor/main.ts'
      ]
    },

    output: require('./output')({ pathinfo: true }),

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
)
