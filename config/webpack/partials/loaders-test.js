const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = [
  {
    test: /\.tsx?$/,
    loader: 'ts'
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loader: 'url?limit=1000&name=images/[hash].[ext]'
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }, {
    test: /\.css$/,
    include: path.resolve('./src/app'),
    loaders: [
      'style',
      'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]',
      'postcss'
    ]
  }, {
    test: /\.woff2?$/,
    loader: 'url-loader',
    options: {
      limit: 50000,
      mimetype: 'application/font-woff',
      name: './fonts/[hash].[ext]',
      publicPath: path.join(rootDir, 'fonts'),
    },
  }, {
    test: /\.css$/,
    exclude: path.resolve('./src/app'),
    loader: 'style!css'
  }, {
    test: /\?raw$/,
    loader: 'raw-loader'
  }
]
