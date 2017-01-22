const path = require('path')
const webpack = require('webpack')
const rootDir = path.resolve('./src')
const merge = require('webpack-merge')

const config = {
  resolveLoader: {
    modulesDirectories: [ // Directories resolved to the current directory
      path.resolve('./node_modules'),
      path.resolve('./config/webpack/loaders'),
    ]
  },

  preLoaders: [
    {
      test: /\.tsx?$/,
      loader: 'tslint'
    }
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015presets[]=react'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file?name=fonts/[hash].[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }, {
        test: /\?raw$/,
        loader: 'raw-loader'
      }
    ],
  },

  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [
          rootDir,
          path.join(rootDir, 'node_modules'),
        ],
      }),
      require('stylelint')({ files: path.join(rootDir, 'app/*.css') }),
      require('postcss-cssnext')(),
      require('postcss-assets')({ relative: path.join(rootDir, 'app') })
    ]
  },
}

module.exports = merge(config)
