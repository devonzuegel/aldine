import * as React from 'react'

import { Markdown } from '~/components/Typography'
import { Layout   } from '~/components/Layout'

const HistoricalPerspective = require('babel-loader!essay-loader!./historical-perspective.md')

export const Aldine: React.StatelessComponent<null> = () => (
  <Layout>
    <Markdown>
      <HistoricalPerspective />
    </Markdown>
  </Layout>
)
