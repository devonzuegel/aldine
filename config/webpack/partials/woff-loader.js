const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = {
  test:   /\.(woff|woff2)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit:      50000,
    mimetype:   'application/font-woff',
    name:       './fonts/[hash].[ext]',
    publicPath: path.join(rootDir, 'fonts'),
 },
}
