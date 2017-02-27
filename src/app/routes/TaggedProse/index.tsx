import * as React from 'react'
import * as R     from 'ramda'
import * as U     from '~/components/utils'
import { Layout } from '~/components/Layout'
import { TaggedProse as Module } from '~/modules/TaggedProse'

type Type = React.StatelessComponent<any>

export const TaggedProse: Type = (props: any) => (
  <Layout>
    <Module {...props} />
  </Layout>
)
