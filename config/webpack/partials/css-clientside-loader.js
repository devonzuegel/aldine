const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

const extractLoader = {
  test:    /\.css$/,
  loader:  ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: [
      { loader: 'css-loader', options: { importLoaders: 3, sourceMap: true, modules: true } },
      'resolve-url-loader',
      'postcss-loader',
    ],
  })
}

const plainLoader = {
  test:    /\.css$/,
  include: projectRoot('app'),
  loaders: [
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
          require('postcss-import')({ path: [ projectRoot('app') ] }),
          require('stylelint')({ files: projectRoot('app/*.css') }),
          require('postcss-cssnext')(),
          require('postcss-assets')({ relative: projectRoot('app') })
        ],
      },
    },
  ],
}

module.exports = ({ buildCSS }) => buildCSS ? extractLoader : plainLoader
