const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const projectRoot = path.resolve(__dirname)

const config = {
  devtool: 'eval',

  debug: true,

  resolve: {
    root: projectRoot,
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './src/client.tsx',
      './src/vendor/main.ts'
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true
  },

  postcss: function () {
    return [
      require('postcss-import')({
        addDependencyTo: webpack,
        path: [
          projectRoot,
          path.join(projectRoot, 'node_modules'),
        ],
      }),
      require('stylelint')({ files: '../../src/app/*.css' }),
      require('postcss-cssnext')(),
      require('postcss-assets')({ relative: '../../src/app' })
    ];
  },

  tslint: {
    failOnHint: true
  },

  plugins: [
    new ManifestPlugin({ fileName: '../manifest.json' }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = require('webpack-merge')(
  config,
  require('./partials/loaders-dev')
);
