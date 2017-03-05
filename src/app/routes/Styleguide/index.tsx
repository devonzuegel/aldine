import * as React    from 'react'
import * as R        from 'ramda'
import { Layout    } from '~/components/Layout'
import { Codeblock } from '~/components/Codeblock'
import { Section   } from '~/components/Section'
import { SideNav   } from '~/components/SideNav'
import { examples  } from '~/components/utils'
import * as T        from '~/components/Typography'

const Guide = (props) => (
  <div id={props.title}>
    <T.HR />
    <T.H2>{props.title}</T.H2>
    {props.children}
  </div>
)

const ClickToView = (name: string) => ({
  name,
  onClick: () => document.getElementById(name).scrollIntoView(),
})

const toc = [
  ClickToView('Section'),
  R.merge(ClickToView('Typography'), {
    children: [ 'H1', 'H2', 'H3', 'H4', 'H5', 'Paragraph', 'Codeblock' ].map(ClickToView)
  }),
]

const Label = (props) => (
  <T.Label faded>
    {props.children} ↘
  </T.Label>
)

const Guides = [
  {
    title: 'Section',
    body: (
      examples(({ attitude, emphasis }) => (
        <div>
          <Label>
            {attitude}, {emphasis}
          </Label>

          <Section {...{ attitude, emphasis }}>
            This is some text inside of a section.
          </Section>
        </div>
      ))
    )
  }, {
    title: 'Typography',
    body: (
      <Section emphasis='secondary'>
        {[ 'H1', 'H2', 'H3', 'H4', 'H5' ].map((name: string, i: number) =>{
          const C = T[name]
          return (
            <div key={i} id={name}>
              <Label>{name} header</Label>
              <C>This is a main header (T.{name})</C>
            </div>
          )
        })}

        <div id='Paragraph'>
          <Label>Paragraph</Label>
          <T.P>
            This is a short paragraph with a <T.A href='#'>link</T.A>.
          </T.P>
          <T.P>
            This is a longer paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quis est tam dissimile homini. Murenam te accusante defenderem. Quid
            autem habent admirationis, cum prope accesseris? Servari enim iustitia nisi a
            forti viro, nisi a sapiente non potest. Duo Reges: constructio interrete. Nescio
            quo modo praetervolavit oratio.
          </T.P>
        </div>

        <div id='HR'>
          <Label>HR</Label>
          <T.HR />
        </div>

        <div id='Codeblock'>
          <Label>Codeblock</Label>
          <Codeblock>
            This is some pre-formatted text.
          </Codeblock>
        </div>
      </Section>
    )
  },
]

export const Styleguide = () => (
  <Layout leftSide={<SideNav {...{ toc }} />}>

    <T.H1>
      Styleguide
    </T.H1>

    {Guides.map(({ title, body }) =>
      <Guide {...{ title }}>
        {body}
      </Guide>
    )}

  </Layout>
)
