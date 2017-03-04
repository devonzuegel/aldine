const R              = require('ramda')
const path           = require('path')
const webpack        = require('webpack')
const merge          = require('webpack-merge')
const combineLoaders = require('webpack-combine-loaders')

const rootDir = path.resolve('./src')

const config = {
  // resolveLoader: {
  //   modulesDirectories: [ // Directories resolved to the current directory
  //     path.resolve('./node_modules'),
  //   ]
  // },

  // preLoaders: [
  //   {
  //     test: /\.tsx?$/,
  //     loader: 'tslint'
  //   }
  // ],

  module: {
    loaders: R.concat(require('./loaders-shared'), [
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        loaders: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
              includePaths: [path.resolve(rootDir, 'node_modules')],
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import')({
                  path: [ path.join(rootDir, 'app', 'styles') ],
                }),
                require('stylelint')({ files: path.join(rootDir, 'app/*.css') }),
                require('postcss-cssnext')(),
                require('postcss-assets')({ relative: path.join(rootDir, 'app') })
              ],
            },
          },
        ],
      }
    ]),
  },
}

module.exports = merge(config)
