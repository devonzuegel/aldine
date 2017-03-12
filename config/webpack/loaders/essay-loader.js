const marked = require('marked')
const R      = require('ramda')

module.exports = (content) => {
 this.cacheable && this.cacheable()
 this.value = content

 // Generate html from string.
 const html = R.pipe(
   // Remove lines that start with comments.
   R.split('\n'),
   R.filter(R.complement(R.test(/^\/\//))),
   R.join('\n'),
   // Inject props. for every variable name.
   R.replace(/\{ ?([\w\.]+) ?\}/g, '{props.$1}'),
   // Convert into markdown.
   marked,
   // Marked parses --- and *** as an unclosed <hr>
   R.replace(/<hr>/g, '<HR />'),
   // Remove extraneous quotes in generated links.
   R.replace(/href="\{props\. ?([\w\.]+) ?\}"/g, 'href={props.$1}')
 )(content)

 // Create a React component, which can be parsed by Babel.
 return `
 import React from 'react'
 import { HR } from '~/components/Typography'
 module.exports = (props) => (
   <div>
      ${html}
   </div>
 )
 `
}
