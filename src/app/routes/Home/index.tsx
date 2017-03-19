import * as React from 'react'
import * as R     from 'ramda'

import * as AutoPOS  from '~/components/AutomatedPOS'
import * as ScrollTo from '~/components/ScrollTo'
import * as U        from '~/components/utils'
import { Layout    } from '~/components/Layout'
import { Markdown  } from '~/components/Typography'
import { SideNav   } from '~/components/SideNav'

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

const essayTOC = R.reduce((soFar, name) => ({ ...soFar, ...tocEntry(name) }), {}, headings)

export const Home: Type = () => (
  <Layout leftSide={<SideNav {...{ toc: headings.map(ScrollTo.Button) }} />}>
    <Markdown>
      <Essay
        toc                ={essayTOC}
        allPartsOfSpeech   ={<AutoPOS.AutomatedPOS text={txt} theme={AutoPOS.Theme.all}/>}
        somePartsOfSpeech  ={<AutoPOS.AutomatedPOS text={txt} />}
        colorfulCode       ={<code>colorfulCode Widget</code>}
        plaintext          ={<code>plaintext Widget</code>}
        highlightedVerbs   ={<code>highlightedVerbs Widget</code>}
        fadedGerundEndings ={<code>fadedGerundEndings Widget</code>}
        gardenPaths        ={<code>gardenPaths Widget</code>}
        noPunctuation      ={<code>noPunctuation Widget</code>}
        automatedTools     ={<code>automatedTools Widget</code>}
        automatedPOSReading={<code>automatedPOSReading Widget</code>}
      />
    </Markdown>
  </Layout>
)
