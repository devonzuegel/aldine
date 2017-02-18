const R    = require('ramda')
const fs   = require('file-system')
const path = require('path')

const rootDir      = 'src/app'
const defaultFiles = R.keys(require('./module-templates'))

const capitalize  = s => s[0].toUpperCase() + s.slice(1)
const camelToDash = s => s.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2')
const dashToCamel = s => capitalize(s.replace(/\W+(.)/g, (x, chr) => chr.toUpperCase()))

const retrieveConfig = c => ({
  category: c('generate.category') || 'model',
  files:    c('generate.files') || defaultFiles,
  moduleName: {
    camel: dashToCamel(c('generate.moduleName') || 'foo-bar'),
    dash:  camelToDash(c('generate.moduleName') || 'foo-bar'),
  },
  hasStyles: R.contains('style.css', c('generate.files') || defaultFiles),
})

const writeFile = (grunt, category, moduleName, hasStyles) => filename => {
  const directory = `${rootDir}/${category}s/${moduleName.dash}`
  const filePath  = `${directory}/${filename}`
  const contents  = require('./module-templates')[filename]({ hasStyles, moduleName })

  if (!contents) {
    grunt.log.error(`No template defined for ${filename}`['red'])
    throw Error
  }

  fs.mkdirSync(directory, [], err => {
    if (err) grunt.log.writeln(`Failed to generate directory: ${err.message}.`)
  })
  grunt.log.writeln(`=> ${filePath}`['gray'])
  grunt.log.writeln(contents['blue'])
  grunt.log.writeln('')
  fs.writeFileSync(filePath, contents, err => {
    if (err) grunt.log.writeln(`Failed to generate template: ${err.message}.`)
  })
}

module.exports = grunt => () => {
  const { category, files, moduleName, hasStyles } = retrieveConfig(grunt.config)

  grunt.log.writeln(`Path:  ${category}/${moduleName.dash}`)
  grunt.log.writeln(`Files: ${files.join(', ')}`)
  grunt.log.writeln(JSON.stringify(require('./module-templates')))

  R.map(writeFile(grunt, category, moduleName, hasStyles), files)
}
