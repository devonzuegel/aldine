import * as React from 'react'
import * as R     from 'ramda'
import * as U     from '~/components/utils'
import { Layout } from '~/components/Layout'
import { AutomatedPOS as Module } from '~/modules/AutomatedPOS'

type Type = React.StatelessComponent<any>

export const AutomatedPOS: Type = (props: any) => (
  <Layout>
    <Module {...props} />
  </Layout>
)
