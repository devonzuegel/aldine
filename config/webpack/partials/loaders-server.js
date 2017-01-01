const path = require('path')

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
        test: /\?raw$/,
        loader: 'raw-loader'
      }
    ]
  },
}
