const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = {

  resolve: {
    // root:       rootDir,
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'config': path.resolve('./config'),
      '~':      path.join(rootDir, 'app'),
      'components': path.join(rootDir, 'app', 'components'),
      'modules': path.join(rootDir, 'app', 'modules'),
      'parsers': path.join(rootDir, 'app', 'parsers'),
      'fonts': path.join(rootDir, 'fonts'),
    },
  },

}
