const R    = require('ramda')
const path = require('path')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

const cssLoaders = [
  {
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      importLoaders:  2,
      sourceMap:      true,
      modules:        true,
      localIdentName: '[local]___[hash:base64:5]',
      includePaths:   [projectRoot('node_modules')],
    },
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        require('postcss-import')({ path: [ projectRoot('app', 'styles') ] }),
        require('stylelint')({ files: projectRoot('app/*.css') }),
        require('postcss-cssnext')(),
        require('postcss-assets')({ relative: projectRoot('app') })
      ],
    },
  },
]

module.exports = {
  module: {
    loaders: [
      ...require('./loaders-shared'),
      {
        test: /\.tsx?$/,
        loader: require('webpack-combine-loaders')([
          'react-hot-loader',
          'awesome-typescript-loader',
        ]),
      }, {
        test: /\.css$/,
        include: projectRoot('app'),
        loaders: cssLoaders,
      }
    ],
  },
}
