const R = require('ramda')

const fileStr = lines => R.filter(R.identity, lines).join("\n")
const reactImports = [
  `import * as React from 'react'`,
  `import * as R     from 'ramda'`,
  `import * as U     from '~/components/utils'`,
]

module.exports = {

  'index.tsx': c => fileStr(R.concat(reactImports, [
    c.hasStyles && `import * as classnames from 'classnames'\n`,
    c.hasStyles && `const s = require('./style.css')`,
    c.hasStyles && ``,
    `interface IProps {`,
    `  children?: any,`,
    `  debug?: boolean,`,
    `  emphasis?: string,`,
    `  attitude?: string,`,
    `}\n`,
    `type Type = React.StatelessComponent<IProps>\n`,
    `export const ${c.moduleName.camel}: Type = (props: IProps) => (`,
    `  <div></div>`,
    `)`,
  ])),

  'index.test.tsx': c => fileStr(R.concat(reactImports, [
    `import { mount  } from 'enzyme'`,
    `import { expect } from 'chai'`,
    c.hasStyles && `import { klass  } from 'helpers/TestHelper'`,
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
    `@import 'styles/base.css';`,
  ]),
}
