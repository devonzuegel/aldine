import * as React from 'react'

import { ThemeChanger } from '~/modules/ThemeChanger'
import { AutomatedPOS } from '~/modules/AutomatedPOS'
import { Layout       } from '~/components/Layout'
import * as GardenPaths from '~/components/GardenPaths'
import { TaggedProse  } from '~/modules/TaggedProse'
import { SideNav      } from '~/components/SideNav'
import { H1, H2, HR   } from '~/components/Typography'
import * as ScrollTo    from '~/components/ScrollTo'

type Type = React.StatelessComponent<any>

const experiments = [
  {
    title: 'Theme Changer',
    Elem: ThemeChanger,
  }, {
    title: 'Automated POS',
    Elem: AutomatedPOS,
  }, {
    title: 'Tagged Prose',
    Elem: TaggedProse,
  }, {
    title: 'Garden Paths',
    Elem: () => (
      <div>
        {GardenPaths.verbs}
        <HR />
        {GardenPaths.spaced}
      </div>
    ),
  }
]

const Guide = (props) => (
  <ScrollTo.Area name={props.title}>
    <HR />
    <H2>{props.title}</H2>
    {props.children}
  </ScrollTo.Area>
)
const toc = experiments.map(({ title }) => ScrollTo.Button(title))

export const Experiments: Type = (props) => (
  <Layout leftSide={<SideNav {...{ toc }} />}>
    <H1>Experiments</H1>
    {experiments.map(({ title, Elem }, i: number) =>
      <Guide {...{ title }} key={i}>
        <Elem {...props} />
      </Guide>
    )}

  </Layout>
)
