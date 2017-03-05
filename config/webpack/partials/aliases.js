const path    = require('path')
const rootDir = path.resolve('./src')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = {
  resolve: {
    modules: [
      projectRoot(),
      projectRoot('app'),
      'node_modules',
    ],
    extensions: ['.json', '.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '~':     projectRoot('app'),
      'fonts': projectRoot('fonts'),
    },
  },
}
