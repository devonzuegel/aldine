module.exports = {
  test:   /\.tsx?$/,
  loader: require('webpack-combine-loaders')([
    'react-hot-loader',
    'awesome-typescript-loader',
  ]),
}
