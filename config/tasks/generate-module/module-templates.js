const R = require('ramda')

const fileStr = lines => R.filter(R.identity, lines).join("\n")
const reactImports = [
  `import * as React from 'react'`,
  `import * as R     from 'ramda'`,
]

module.exports = {

  'index.tsx': c => fileStr(R.concat(reactImports, [
    c.hasStyles && `import * as classnames from 'classnames'\n`,
    c.hasStyles && `const s = require('./style.css')\n`,
    `export const ${c.moduleName.camel} = (props) => (`,
    `  <div></div>`,
    `)`,
  ])),

  'index.test.tsx': c => fileStr(R.concat(reactImports, [
    `import { mount  } from 'enzyme'`,
    `import { expect } from 'chai'`,
    c.hasStyles && `import { klass  } from '~/helpers/TestHelper'`,
    `\nimport { ${c.moduleName.camel} } from './index'\n`,
    c.hasStyles && `const s = require('./style.css')\n`,
    `describe('<${c.moduleName.camel} />', () => {\n`,
    `  beforeEach(() => {`,
    `  })\n`,
    `  it('TODO', () => {`,
    `  })\n`,
    `})`,
  ])),

  'style.css': c => fileStr([
    `@import 'app/styles/colors.css';`,
    `@import 'app/styles/typefaces.css';`,
  ]),
}
