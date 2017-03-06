require('es6-promise').polyfill()
require('isomorphic-fetch')

const context = require.context('../../../src', true, /.test\.tsx?$/)
context.keys().forEach(context)
