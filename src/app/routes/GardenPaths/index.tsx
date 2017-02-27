import * as React from 'react'
import * as R     from 'ramda'
import * as U     from '~/components/utils'
import { Layout } from '~/components/Layout'
import { GardenPaths as Module } from '~/components/GardenPaths'

type Type = React.StatelessComponent<any>

export const GardenPaths: Type = (props: any) => (
  <Layout>
    <Module {...props} />
  </Layout>
)
