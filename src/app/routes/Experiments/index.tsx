import * as React               from 'react'
import { Home as ThemeChanger } from 'modules/Home'
import { AutomatedPOS         } from 'modules/AutomatedPOS'
import { Layout               } from 'components/Layout'
import { GardenPaths          } from 'components/GardenPaths'
import { TaggedProse          } from 'modules/TaggedProse'
import { SideNav              } from 'components/SideNav'
import { H1, H2, HR           } from 'components/Typography'

type Type = React.StatelessComponent<any>

const ClickToView = (name: string) => ({
  name,
  onClick: () => document.getElementById(name).scrollIntoView(),
})

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
    Elem: GardenPaths,
  }
]

const Guide = (props) => (
  <div id={props.title}>
    <HR />
    <H2>{props.title}</H2>
    {props.children}
  </div>
)
const toc = experiments.map(({ title }) => ClickToView(title))

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
