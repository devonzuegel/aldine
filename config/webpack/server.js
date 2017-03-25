const path = require('path')
const fs   = require('fs')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => { nodeModules[mod] = 'commonjs ' + mod })

module.exports = require('webpack-merge')(
  require('./partials/aliases'),
  {
    externals: nodeModules,
    target:    'node',
    entry:     './src/server.tsx',

    output: {
      path:          path.resolve('./build/public'),
      filename:      '../server.js',
      publicPath:    '/public/',
      libraryTarget: 'commonjs2'
    },

    module: {
      loaders: [
        require('./partials/woff-loader'),
        require('./partials/img-loader'),
        require('./partials/mp4-loader'),
        require('./partials/ts-serverside-loader'),
        require('./partials/css-serverside-loader'),
      ],
    },

    node: {
      console:    false,
      global:     false,
      process:    false,
      Buffer:     false,
      __filename: false,
      __dirname:  false
    }
  }
)
