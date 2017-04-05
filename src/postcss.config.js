const path = require('path')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = {
  plugins: [
    require('postcss-import')({ path: [ projectRoot('app') ] }),
    require('stylelint')({ files: projectRoot('app/*.css') }),
    require('postcss-assets')({ relative: projectRoot('app') }),
    require('postcss-cssnext')(),
  ],
}
