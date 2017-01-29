const path    = require('path')
const rootDir = path.resolve('./src')

module.exports = {

  resolve: {
    root:       rootDir,
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~':        path.join(rootDir, 'app'),
      components: path.join(rootDir, 'app/components'),
      models:     path.join(rootDir, 'app/models'),
    },
  },

}
