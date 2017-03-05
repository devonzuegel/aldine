const load = taskName => require(`./config/tasks/${taskName}`)

module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    karma: {
      default: {
        configFile: 'config/test/karma.conf.js',
        singleRun:  true,
        autoWatch:  false,
        reporters:  ['mocha'],
      },
      watch: {
        configFile: 'config/test/karma.conf.js',
        singleRun:  false,
        autoWatch:  true,
        reporters:  ['dots'],
      },
    },

    prompt: {
      generate: {
        options: { questions: load('generate-module/prompt-questions') }
      },
    },
  })

  grunt.loadNpmTasks('grunt-karma')
  grunt.registerTask('test', ['karma:default'])
  grunt.registerTask('watch', ['karma:watch'])
  grunt.registerTask('generate-module', load('generate-module')(grunt))
  grunt.registerTask('generate', ['prompt:generate', 'generate-module'])

}
