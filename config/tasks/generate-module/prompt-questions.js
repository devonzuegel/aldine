const R = require('ramda')

const files = R.keys(require('./module-templates'))

module.exports = [
  {
    config:  'generate.category',
    type:    'list',
    message: 'Category?',
    choices: ['component', 'container', 'helper', 'module'],
  }, {
    config:  'generate.moduleName',
    type:    'input',
    message: 'Module name?',
  }, {
    config:  'generate.files',
    type:    'checkbox',
    message: 'Files?',
    choices: files.map(filename => ({ value: filename, checked: true }))
  }
]
