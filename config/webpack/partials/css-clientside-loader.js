const path = require('path')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = {
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
