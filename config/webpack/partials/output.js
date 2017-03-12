const path = require('path')

module.exports = ({ pathinfo }) => ({
  path:       path.resolve('./build/public'),
  publicPath: '/public/',
  filename:   'js/[name].js',
  pathinfo,
})
