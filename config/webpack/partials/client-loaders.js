module.exports = {
  module: {
    loaders: [
      require('./raw-loader'),
      require('./woff-loader'),
      require('./img-loader'),
      require('./mp4-loader'),
      require('./css-clientside-loader'),
      require('./ts-clientside-loader'),
    ],
  },
}
