var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');
var ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');

var config = {
  devtool: 'eval',

  debug: true,

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/client.tsx',
      './src/vendor/main.ts'
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true
  },

  postcss: function () {
    return [
      stylelint({ files: '../../src/app/*.css' }),
      postcssNext(),
      postcssAssets({ relative: true })
    ];
  },

  tslint: {
    failOnHint: true
  },

  plugins: [
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = merge(
  config,
  require('./partials/loaders-dev')
);
