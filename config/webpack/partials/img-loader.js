module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loaders: [
    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
    {
      loader: 'image-webpack-loader',
      query: {
        mozjpeg:  { progressive: true          },
        gifsicle: { interlaced: false          },
        optipng:  { optimizationLevel: 4       },
        pngquant: { quality: '75-90', speed: 3 },
      },
    }
  ]
}
