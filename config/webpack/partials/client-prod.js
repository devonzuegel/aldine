const fs             = require('fs')
const path           = require('path')
const webpack        = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

const config = require('webpack-merge')(
  require('./aliases'),
  require('./client-loaders'),
  {
    entry: {
      app: [
        './src/client.tsx',
        './src/vendor/main.ts'
      ]
    },

    output: {
      path: path.resolve('./build/public'),
      publicPath: '/public/',
      filename: 'js/[name].[hash].js',
    },

    plugins: [
      new ManifestPlugin({ fileName: '../manifest.json' }),
      new webpack.DefinePlugin({
        'process.env': {
          BROWSER: JSON.stringify(true),
          NODE_ENV: JSON.stringify('prod')
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
)

const copySync = (src, dest, overwrite) => {
  if (overwrite && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
  }
  const data = fs.readFileSync(src);
  fs.writeFileSync(dest, data);
}

const createIfDoesntExist = dest => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
}

createIfDoesntExist('./build');
createIfDoesntExist('./build/public');
copySync('./src/assets/favicon.ico', './build/public/favicon.ico', true);


module.exports = config
