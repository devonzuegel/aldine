const path                    = require('path')
const webpack                 = require('webpack')
const ManifestPlugin          = require('webpack-manifest-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

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

    module: {
      loaders: [
        require('./css-clientside-loader')({ buildCSS: false }),
      ],
    },

    output: {
      path:       path.resolve('./build/public'),
      publicPath: '/public/',
      filename:   'js/[name].js',
      pathinfo:   true,
    },

    devtool: 'eval',

    plugins: [
      new ManifestPlugin({ fileName: '../manifest.json' }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/,
        cssProcessorOptions: { discardComments: { removeAll: true } }
      }),
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
