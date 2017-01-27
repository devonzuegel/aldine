const path = require('path')
const rootDir = path.resolve('./src')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.jsx$/,
        loader: 'babel?presets[]=es2015'
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: [
          'isomorphic-style-loader',
          'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
        ]
      }, {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          mimetype: 'application/font-woff',
          // Output below the fonts directory
          name: './fonts/[hash].[ext]',
          // Tweak publicPath to fix CSS lookups to take
          // the directory into account.
          publicPath: path.join(rootDir, 'fonts'),
        },

      }, {
        test: /\?raw$/,
        loader: 'raw-loader'
      }
    ]
  },
}
