const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = {

  resolve: {
    root:       rootDir,
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'config': path.resolve('./config'),
      '~':      path.join(rootDir, 'app'),
    },
  },

}
