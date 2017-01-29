const R       = require('ramda')
const path    = require('path')
const webpack = require('webpack')
const merge   = require('webpack-merge')
const rootDir = path.resolve('./src')

const config = {
  resolveLoader: {
    modulesDirectories: [ // Directories resolved to the current directory
      path.resolve('./node_modules'),
    ]
  },

  preLoaders: [
    {
      test: /\.tsx?$/,
      loader: 'tslint'
    }
  ],

  module: {
    loaders: R.concat(require('./loaders-shared'), [
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loaders: [
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
          'postcss',
        ],
      }
    ]),
  },

  postcss: () => [
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
  ],
}

module.exports = merge(config)
