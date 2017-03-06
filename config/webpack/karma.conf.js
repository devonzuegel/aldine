const path      = require('path')
const webpack   = require('webpack')
const appConfig = require('../main')

const projectRoot = (...absolutePath) =>
  path.join(path.resolve('./src'), ...absolutePath)

module.exports = (config) => {
  const conf = {
    preprocessors: {
      '../src/**/*.ts':              ['coverage'],
      '../src/**/*.tsx':             ['coverage'],
      '../webpack/partials/test.js': ['webpack'],
    },

    coverageReporter: { dir: '../../coverage', reporters: [] },
    autoWatch:        true,
    browsers:         ['PhantomJS'],
    colors:           true,
    concurrency:      Infinity,
    files:            ['./partials/test.js'],
    frameworks:       ['mocha', 'chai', 'es6-shim'],
    hostname:         appConfig.host,
    logLevel:         config.LOG_INFO,
    plugins:          ['karma-*'],
    port:             appConfig.karmaPort,
    reporters:        ['mocha', 'coverage'],
    singleRun:        false,

    webpack: require('webpack-merge')(
      require('../webpack/partials/aliases'),
      require('../webpack/partials/loaders-test'),
      {
        devtool: 'inline-source-map',

        externals: {
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': 'window',
        },

        plugins: [
          new webpack.LoaderOptionsPlugin({
            options: {
              tslint:  { failOnHint: true },
              postcss: () => [
                require('postcss-import')({ path: [ projectRoot('app') ] }),
                require('stylelint')({ files: projectRoot('app/*.css') }),
                require('postcss-cssnext')(),
                require('postcss-assets')({ relative: projectRoot('app') }),
              ],
            }
          }),
          new webpack.IgnorePlugin(/^fs$/),
          new webpack.IgnorePlugin(/^react\/addons$/),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.DefinePlugin({
            'process.env': {
              BROWSER:  JSON.stringify(true),
              NODE_ENV: JSON.stringify('development'),
            }
          }),
        ]
      }
    ),

    webpackServer: { noInfo: true }
  }

  if (process.env.NODE_ENV === 'ci') {
    conf.autoWatch = false
    conf.singleRun = true
    conf.browsers.push('Firefox')
    conf.coverageReporter.reporters.push({ type: 'lcov', subdir: '.' })
  } else {
    conf.browsers.push('Chrome')
    conf.coverageReporter.reporters.push({ type: 'html', subdir: 'html' })
  }

  config.set(conf)
}
