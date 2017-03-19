import * as React from 'react'

import { Layout     } from '~/components/Layout'
import { Codeblock  } from '~/components/Codeblock'
import { Section    } from '~/components/Section'
import { SideNav    } from '~/components/SideNav'
import { examples   } from '~/components/utils'
import * as Box       from '~/components/Box'
import * as Alignment from '~/components/Box/types/Alignment'
import * as Width     from '~/components/Box/types/Width'
import * as ScrollTo  from '~/components/ScrollTo'
import * as T         from '~/components/Typography'

const MarkdownSample = require('babel-loader!essay-loader!./sample.md')

const Guide = (props: { title: string, children?: any }) => (
  <ScrollTo.Area name={props.title}>
    <T.HR />
    <T.H2>{props.title}</T.H2>
    {props.children}
  </ScrollTo.Area>
)

const Label = (props: { children?: any }) => (
  <T.Label faded>
    {props.children} ↘
  </T.Label>
)

const headers = [ 'H1', 'H2', 'H3', 'H4', 'H5' ]

const toc = [
  ScrollTo.Button('Section'),
  ScrollTo.Button('Box'),
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
      examples(({ attitude, emphasis }: { attitude: string, emphasis: string }) => (
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
    title: 'Box',
    body: (
      <ScrollTo.Area name='Box'>
        <Label>
          Options
        </Label>
        <Codeblock>
          <b>Alignment:</b>  left   center  right                   // Box &amp; text
          <br />
          <b>Spacing:</b>    small  medium  large  xlarge  xxlarge  // Margins &amp; padding
          <br />
          <b>Width:</b>      small  medium  large  full             // Box width
          <br />
          <b>inline:</b>     true   false
        </Codeblock>

        {['small', 'full'].map((width: Width.Type, i: number) =>
          ['left', 'center', 'right'].map((align: Alignment.Type, j: number) => {
            return (
              <div key={`${i}-${j}`}>
                <Label>
                Width: {width}, Text Alignment: {align}
                </Label>

                <Box.Box textAlign={align} width={width} debug>
                  This is some text inside of a box.
                </Box.Box>
              </div>
            )
          })
        )}
      </ScrollTo.Area>
    )
  }, {
    title: 'Typography',
    body: (
      <Section emphasis='secondary'>
        {headers.map((name: string, i: number) =>{
          const TypedTypography: {[key: string]: any} = T
          const C: React.StatelessComponent<any> = TypedTypography[name]
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
