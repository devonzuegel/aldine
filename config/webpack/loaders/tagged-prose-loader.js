const R = require('ramda')

module.exports = function(content) {
  this.cacheable && this.cacheable()
  this.value = content

  // Generate html from string
  return R.pipe(
    // Split on each faq name
    R.split('---'),
    // Remove empty faqs
    R.filter(Boolean),
    // Trim each faq
    R.map(R.trim),
    // Split into [name, question, answer]
    R.map(R.split(/\s+### question:\s+|\s+### answer:\s+/)),
    // Generate the JS FAQ object
    R.map((faq) => `
      ${faq[0].replace('# ', '')}: {
        name:     "${faq[0].replace('# ', '')}",
        question: <div>${faq[1]}</div>,
        answer:   <div>${faq[2]}</div>,
        text: {
          question: "${faq[1].replace(/[\n\r]/g, ' ')}",
          answer:   "${faq[2].replace(/[\n\r]/g, ' ')}",
        },
      },
    `),
    // Join all the elements together
    R.join(''),
    // Wrap up in a js object
    str => `
      import React from 'react'
      const faqs = { ${str} }
      export default faqs
    `
  )(content)
}
