const path = require('path')
const fs   = require('fs')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => { nodeModules[mod] = 'commonjs ' + mod })

const config = {
  externals: nodeModules,
  target:    'node',

  entry: './src/server.tsx',

  output: {
    path:          path.resolve('./build/public'),
    filename:      '../server.js',
    publicPath:    '/public/',
    libraryTarget: 'commonjs2'
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

module.exports = require('webpack-merge')(
  config,
  require('./partials/aliases'),
  require('./partials/server-loaders')
)
