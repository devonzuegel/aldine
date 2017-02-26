import * as React from 'react'
import * as R     from 'ramda'
import * as U     from '~/components/utils'
import { Home   } from '~/modules/Home'
import { Layout } from '~/components/Layout'

type Type = React.StatelessComponent<any>

export const ThemeChanger: Type = (props: any) => (
  <Layout>
    <Home {...props} />
  </Layout>
)
