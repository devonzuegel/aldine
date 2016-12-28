var path = require('path')

module.exports = function (config) {
  return {
    resolveLoader: {
      // Directory names to be resolved to the current directory
      modulesDirectories: [
        path.resolve('./node_modules'),
        path.resolve('./config/webpack/loaders'),
      ]
    },

    module: {
      loaders: [
        {
          test: /\?tagged-prose$/,
          loaders: [
            'babel?presets[]=es2015&presets[]=react',
            'tagged-prose',
          ],
        },
      ],
    },
  }
}
