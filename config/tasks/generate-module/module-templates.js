const R = require('ramda')

const fileStr = lines => R.filter(R.identity, [...lines, "\n"]).join("\n")
const reactImports = [
  `import * as React from 'react'`,
  `import * as R     from 'ramda'`,
]

module.exports = {

  'index.tsx': ({ hasStyles, moduleName }) => fileStr([
    ...reactImports,
    hasStyles && `import * as classnames from 'classnames'\n`,
    hasStyles && `const s = require('./style.css')\n`,
    `const ${moduleName.camel} = (props) => (`,
    `  <div></div>`,
    `)\n`,
    `export const ${moduleName.camel}`,
  ]),

  'index.test.tsx': ({ hasStyles, moduleName }) => fileStr([
    ...reactImports,
    `import { mount  } from 'enzyme'`,
    `import { expect } from 'chai'`,
    hasStyles && `import { klass  } from '~/helpers/TestHelper'\n`,
    hasStyles && `const s = require('./style.css')\n`,
    `describe('<${moduleName.camel} />', () => {`,
    `  beforeEach(() => {`,
    `  }\n`,
    `  it('TODO')`,
    `})`,
  ]),

  'style.css': ({ hasStyles, moduleName }) => fileStr([
    `@import 'app/styles/colors.css';`,
    `@import 'app/styles/typefaces.css';`,
  ]),
}
