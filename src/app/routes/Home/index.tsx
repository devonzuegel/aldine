import * as React from 'react'
import * as R     from 'ramda'

import * as Theme        from '~/models/Theme'
import * as GardenPaths  from '~/components/GardenPaths'
import * as ScrollTo     from '~/components/ScrollTo'
import * as T            from '~/components/Typography'
import * as U            from '~/components/utils'
import { Parenthetical } from '~/components/Parenthetical'
import { AutomatedPOS  } from '~/components/AutomatedPOS'
import { Codeblock     } from '~/components/Codeblock'
import { Example as Ex } from '~/components/Example'
import { Layout        } from '~/components/Layout'
// import { SideNav       } from '~/components/SideNav'

// Text
const Essay = require('babel-loader!essay-loader!./essay.md')
const txt   = require('raw-loader!./sample.txt')

// Syntax highlighted
const tsxExample   = require('babel-loader!highlight-loader?raw=true&lang=js!./example-tsx')
const rubyExample  = require('babel-loader!highlight-loader?raw=true&lang=rb!./example.rb')
const confusingCPP = require('babel-loader!highlight-loader?raw=true&lang=c!./example-confusing.c')

// Plaintext
const tsxPlainExample    = require('babel-loader!raw-loader!./example-tsx')
const rubyPlainExample   = require('babel-loader!raw-loader!./example.rb')
const parenthesesExample = require('babel-loader!raw-loader!./example-parentheses.txt')

const stringLiteralMp4: string = require('assets/string-literal-bug.mp4')

const headings = [
  'All parts of speech',
  'Highlighted verbs',
  'Faded articles',
  'Faded gerund endings',
  'Garden paths',
  'No punctuation',
  'Automated tools',
  'Automated POS tagging',
  'Historical perspective',
]

const tocEntry = (name: string) => ({
  [U.spaceToCamel(name)]: ScrollTo.Area({ name })
})

const greyifyBraces = R.pipe(
  R.replace(/React.StatelessComponent/g, `<span class="hljs-params">React.StatelessComponent</span>`),
  R.replace(/\$/g, `<span class="greyBraces">$</span>`),
  R.replace(/\{/g, `<span class="greyBraces">{</span>`),
  R.replace(/\}/g, `<span class="greyBraces">}</span>`),
)

const examples: {[key: string]: any} = {
  stringLiteralGif: <video width='100%' src={stringLiteralMp4} autoPlay preload='none' loop />,
  allPartsOfSpeech: (
    <Ex label='All parts of speech'>
      <AutomatedPOS text={txt} theme={Theme.Enum.all} />
    </Ex>
  ),
  somePartsOfSpeech: (
    <Ex label='Some parts of speech'>
      <AutomatedPOS text={txt} />
    </Ex>
  ),
  plaintextTsx: (
    <Ex label='It is hard to know what to focus on when reading plaintext Typescript'>
      <Codeblock dark highlight>
        {tsxPlainExample}
      </Codeblock>
    </Ex>
  ),
  greyedOutTsx: (
    <Ex label='Faded curly braces'>
      <Codeblock dark highlight>
        <div dangerouslySetInnerHTML={{__html: greyifyBraces(tsxExample)}} />
      </Codeblock>
    </Ex>
  ),
  plaintextCode: (
    <Ex label='Plaintext Ruby'>
      <Codeblock dark highlight>
        {rubyPlainExample}
      </Codeblock>
    </Ex>
  ),
  colorfulCode: (
    <Ex label='Syntax highlighted ruby'>
      <Codeblock dark highlight>
        <div dangerouslySetInnerHTML={{__html: rubyExample}} />
      </Codeblock>
    </Ex>
  ),
  confusingCPP: (
    <Ex label='Do you have any idea what this C code does?'>
      <Codeblock dark highlight>
        <div dangerouslySetInnerHTML={{__html: confusingCPP}} />
      </Codeblock>
    </Ex>
  ),
  gardenPathVerbs: (
    <Ex label='Garden paths with highlighted verbs'>
      {GardenPaths.verbs}
    </Ex>
  ),
  parenthesesExample: (
    <Ex label='Faded parentheticals'>
      <Parenthetical text={parenthesesExample} />
    </Ex>
  ),
  gardenPathSpaced: (
    <Ex label='Spaced garden paths'>
        {GardenPaths.spaced}
    </Ex>
  ),
  fadedStopWords: (
    <Ex label='Faded stop words'>
      <AutomatedPOS text={txt} theme={Theme.Enum.fadedArticle} />
    </Ex>
  ),
  highlightedVerbs:    <code>highlightedVerbs widget</code>,
  fadedGerundEndings:  <code>fadedGerundEndings widget</code>,
  noPunctuation:       <code>noPunctuation widget</code>,
  automatedTools:      <code>automatedTools widget</code>,
  automatedPOSReading: <code>automatedPOSReading widget</code>,
}

const essayTOC = R.reduce((soFar, name) => ({ ...soFar, ...tocEntry(name) }), {}, headings)

export const Home: React.StatelessComponent<null> = () => (
  // <Layout leftSide={<SideNav {...{ toc: headings.map(ScrollTo.Button) }} />}>
  <Layout width='large'>
    <T.Markdown>
      <Essay toc={essayTOC} {...examples} />
    </T.Markdown>
  </Layout>
)
