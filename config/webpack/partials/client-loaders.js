module.exports = {
  module: {
    loaders: [
      require('./raw-loader'),
      require('./woff-loader'),
      require('./css-clientside-loader'),
      require('./ts-clientside-loader'),
    ],
  },
}
