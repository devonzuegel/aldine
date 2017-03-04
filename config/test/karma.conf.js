var path = require('path')
var webpack = require('webpack')
var postcssAssets = require('postcss-assets')

var appConfig = require('../main')
var rootDir = path.resolve('./src')

module.exports = function (config) {
  var conf = {
    frameworks: ['mocha', 'chai', 'es6-shim'],

    browsers: ['PhantomJS'],

    files: ['../webpack/test.js'],

    preprocessors: {
      '../src/**/*.ts': ['coverage'],
      '../src/**/*.tsx': ['coverage'],
      '../webpack/test.js': ['webpack']
    },

    plugins: ['karma-*'],

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },

    hostname: appConfig.host,

    port: appConfig.karmaPort,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        modules: [
          path.resolve(__dirname),
          '../../src',
          '../../src/app',
          '../../src/app/redux',
          'node_modules'
        ],
        extensions: ['.json', '.js', '.ts', '.tsx', '.jsx']
      },

      module: {
        rules: [{
          test:   /\.(woff|woff2)(\?.*)?$/,
          loader: 'url-loader',
            options: {
              limit:      50000,
              mimetype:   'application/font-woff',
              name:       './fonts/[hash].[ext]',
              publicPath: path.join(rootDir, 'fonts'),
           },
        }, {
          // // TODO: put back
          //   enforce: 'pre',
          //   test: /\.tsx?$/,
          //   loader: 'tslint-loader'
          // },
          // {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader?useCache=false'
          }, {

            test: /\.css$/,
            include: path.resolve('./src/app'),
            loader: require('webpack-combine-loaders')([
              {
                loader: 'style-loader'
              }, {
                loader: 'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
            //     // loader: 'css-loader',
            //     // options: {
            //     //   importLoaders: 2,
            //     //   sourceMap: true,
            //     //   modules: true,
            //     //   localIdentName: '[local]___[hash:base64:5]',
            //     //   includePaths: [path.resolve(rootDir, 'node_modules')],
            //     // },
            //   // }, {
            //   //   loader: 'resolve-url-loader',

              }, {
                loader: 'postcss-loader',
              },
            ]),
          }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ],
      },

      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },

      plugins: [
        new webpack.LoaderOptionsPlugin({
          options: {
            tslint: { failOnHint: true },
            postcss: () => {
              return [
                require('postcss-import')({
                  path: [ path.join(rootDir, 'app', 'styles') ],
                }),
                require('stylelint')({ files: path.join(rootDir, 'app/*.css') }),
                require('postcss-cssnext')(),
                require('postcss-assets')({ relative: path.join(rootDir, 'app') })
              ]
            },
          }
        }),
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.IgnorePlugin(/^react\/addons$/),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('development')
          }
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }
  }

  if (process.env.NODE_ENV === 'ci') {
    conf.autoWatch = false
    conf.singleRun = true
    conf.browsers.push('Firefox')
    conf.coverageReporter.reporters.push({
      type: 'lcov',
      subdir: '.'
    })
  } else {
    conf.coverageReporter.reporters.push({
      type: 'html',
      subdir: 'html'
    })
    conf.browsers.push('Chrome')
  }

  config.set(conf)
  //   (
  //     require('webpack-merge')(
  //   require('../webpack/partials/aliases'),
  //   require('../webpack/partials/loaders-server'),
  //   conf
  // ))
}
