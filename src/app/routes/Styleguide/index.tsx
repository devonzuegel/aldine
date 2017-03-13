import * as React from 'react'

import { Layout    } from '~/components/Layout'
import { Codeblock } from '~/components/Codeblock'
import { Section   } from '~/components/Section'
import { SideNav   } from '~/components/SideNav'
import { examples  } from '~/components/utils'
import * as T        from '~/components/Typography'
import * as ScrollTo from '~/components/ScrollTo'

const MarkdownSample = require('babel-loader!essay-loader!./sample.md')

const Guide = (props) => (
  <ScrollTo.Area name={props.title}>
    <T.HR />
    <T.H2>{props.title}</T.H2>
    {props.children}
  </ScrollTo.Area>
)

const Label = (props) => (
  <T.Label faded>
    {props.children} ↘
  </T.Label>
)

const headers = [ 'H1', 'H2', 'H3', 'H4', 'H5' ]

const toc = [
  ScrollTo.Button('Section'),
  {
    ...ScrollTo.Button('Typography'),
    children: [
      ...headers,
      'Paragraph',
      'Codeblock',
      'Code',
      'Markdown',
    ].map(ScrollTo.Button)
  },
]

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
        {headers.map((name: string, i: number) =>{
          const C = T[name]
          return (
            <ScrollTo.Area key={i} name={name}>
              <Label>{name} header</Label>
              <C>This is a main header (T.{name})</C>
            </ScrollTo.Area>
          )
        })}

        <ScrollTo.Area name='Paragraph'>
          <Label>Paragraph</Label>
          <T.P>
            This is a short paragraph with a <T.A href='#'>link</T.A> that does nothing.
          </T.P>
          <T.P>
            This is a longer paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quis est tam dissimile homini. Murenam te accusante defenderem. Quid
            autem habent admirationis, cum prope accesseris? Servari enim iustitia nisi a
            forti viro, nisi a sapiente non potest. Duo Reges: constructio interrete. Nescio
            quo modo praetervolavit oratio.
          </T.P>
        </ScrollTo.Area>

        <ScrollTo.Area name='HR'>
          <Label>HR</Label>
          <T.HR />
        </ScrollTo.Area>

        <ScrollTo.Area name='Codeblock'>
          <Label>Codeblock</Label>
          <Codeblock>
            This is some pre-formatted text.
          </Codeblock>
        </ScrollTo.Area>

        <ScrollTo.Area name='Code'>
          <Label>Code</Label>
          <T.P>
            This paragraph contains inline <T.Code>code</T.Code>.
          </T.P>
        </ScrollTo.Area>

        <ScrollTo.Area name='Markdown'>
          <Label>Markdown Container</Label>
          <T.P>
            Normalizes typography styles for parsed Markdown to the
            styles of Typography components.
          </T.P>
          <Section>
            <T.Markdown>
              <MarkdownSample />
            </T.Markdown>
          </Section>
        </ScrollTo.Area>
      </Section>
    )
  },
]

export const Styleguide = () => (
  <Layout leftSide={<SideNav {...{ toc }} />}>

    <T.H1>
      Styleguide
    </T.H1>

    {Guides.map(({ title, body }, i) =>
      <Guide {...{ title }} key={i}>
        {body}
      </Guide>
    )}

  </Layout>
)
