import * as React from 'react'
import * as R     from 'ramda'

import * as AutoPOS      from '~/components/AutomatedPOS'
import * as ScrollTo     from '~/components/ScrollTo'
import * as U            from '~/components/utils'
import * as T            from '~/components/Typography'
import { Example as Ex } from '~/components/Example'
import { Layout        } from '~/components/Layout'
// import { SideNav       } from '~/components/SideNav'
import * as GardenPaths  from '~/components/GardenPaths'

const Essay = require('babel-loader!essay-loader!./essay.md')
const txt = require('raw-loader!./sample.txt')

type Type = React.StatelessComponent<null>

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

const examples: {[key: string]: any} = {
  allPartsOfSpeech: (
    <Ex label='All parts of speech'>
      <AutoPOS.AutomatedPOS text={txt} theme={AutoPOS.Theme.all}/>
    </Ex>
  ),
  somePartsOfSpeech: (
    <Ex label='Some parts of speech'>
      <AutoPOS.AutomatedPOS text={txt} />
    </Ex>
  ),
  colorfulCode:       <code>colorfulCode widget</code>,
  plaintext:          <code>plaintext code widget</code>,
  highlightedVerbs:   <code>highlightedVerbs widget</code>,
  fadedGerundEndings: <code>fadedGerundEndings widget</code>,
  gardenPathVerbs: ( // TODO: change N to number
    <Ex label='Garden paths with highlighted verbs'>
      {GardenPaths.verbs}
    </Ex>
  ),
  gardenPathSpaced: ( // TODO: change N to number
    <Ex label='Spaced garden paths'>
      {GardenPaths.spaced}
    </Ex>
  ),
  noPunctuation:       <code>noPunctuation widget</code>,
  automatedTools:      <code>automatedTools widget</code>,
  automatedPOSReading: <code>automatedPOSReading widget</code>,
}

const essayTOC = R.reduce((soFar, name) => ({ ...soFar, ...tocEntry(name) }), {}, headings)

export const Home: Type = () => (
  // <Layout leftSide={<SideNav {...{ toc: headings.map(ScrollTo.Button) }} />}>
  <Layout>
    <T.Markdown>
      <Essay toc={essayTOC} {...examples}/>
    </T.Markdown>
  </Layout>
)
