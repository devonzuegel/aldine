module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.loadNpmTasks('grunt-karma')

  grunt.initConfig({
    karma: {
      default: {
        configFile: 'config/test/karma.conf.js',
        singleRun: true,
        autoWatch: false,
        reporters: ['mocha'],
      },
      watch: {
        configFile: 'config/test/karma.conf.js',
        singleRun: false,
        autoWatch: true,
        reporters: ['dots'],
      },
    },
  })

  grunt.registerTask('test', ['karma:default'])
  grunt.registerTask('watch', ['karma:watch'])
}
