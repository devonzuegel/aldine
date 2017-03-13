import * as React from 'react'
import * as R     from 'ramda'

import { Layout      } from '~/components/Layout'
import { SideNav     } from '~/components/SideNav'
import * as ScrollTo   from '~/components/ScrollTo'

const Essay = require('babel-loader!essay-loader!./essay.md')

type Type = React.StatelessComponent<null>

const headings = [
  'allPartsOfSpeech',
  'highlightedVerbs',
  'fadedArticles',
  'fadedGerundEndings',
  'gardenPaths',
  'noPunctuation',
  'automatedTools',
  'automatedPOSReading',
  'historicalPerspective',
]

const essayTOC = R.reduce(
  (soFar, name) => R.merge(soFar, { [name]: ScrollTo.Area({ name }) }),
  {}
)(headings)

export const Home: Type = () => (
  <Layout leftSide={<SideNav {...{ toc: headings.map(ScrollTo.Button) }} />}>
    <Essay
      toc                ={essayTOC}
      allPartsOfSpeech   ={<code>allPartsOfSpeech Widget</code>}
      colorfulCode       ={<code>colorfulCode Widget</code>}
      plaintext          ={<code>plaintext Widget</code>}
      highlightedVerbs   ={<code>highlightedVerbs Widget</code>}
      fadedGerundEndings ={<code>fadedGerundEndings Widget</code>}
      gardenPaths        ={<code>gardenPaths Widget</code>}
      noPunctuation      ={<code>noPunctuation Widget</code>}
      automatedTools     ={<code>automatedTools Widget</code>}
      automatedPOSReading={<code>automatedPOSReading Widget</code>}
    />
  </Layout>
)
