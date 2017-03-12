import * as React      from 'react'
import { Layout      } from '~/components/Layout'
import { SideNav     } from '~/components/SideNav'
import { ClickToView } from '~/components/Layout'

const Essay = require('babel-loader!essay-loader!./essay.md')

type Type = React.StatelessComponent<null>

const toc = [].map(ClickToView)

export const Home: Type = () => (
  <Layout leftSide={<SideNav {...{ toc }} />}>
    <Essay
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
