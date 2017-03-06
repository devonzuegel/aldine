'use strict'

const inProduction = process.env.NODE_ENV === 'production'
const environment  = inProduction ? 'prod' : 'dev'

module.exports = require(`./partials/client-${environment}`)
