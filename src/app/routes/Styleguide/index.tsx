import * as React    from 'react'
import { Layout    } from '~/components/Layout'
import { Codeblock } from '~/components/Codeblock'
import { Section   } from '~/components/Section'
import { examples  } from '~/components/utils'
import * as T        from '~/components/Typography'

const Guide = (props) => (
  <div>
    <T.HR />
    <T.H2>{props.title}</T.H2>
    {props.children}
  </div>
)

const StyleguideNav = (
  <Section emphasis='secondary'>
    Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the row axis (as opposed to justify-content which aligns the grid along the column axis).
    Start aligns the grid to the top of the grid container.
  </Section>
)

const Label = (props) => (
  <T.Label faded>
    {props.children} ↘
  </T.Label>
)

export const Styleguide = () => (
  <Layout leftSide={StyleguideNav}>
    <T.H1>
      Styleguide
    </T.H1>

    <Guide title='Section'>
      {examples(({ attitude, emphasis }) => (
        <div>
          <Label>
            {attitude}, {emphasis}
          </Label>

          <Section {...{ attitude, emphasis }}>
            This is some text inside of a section.
          </Section>
        </div>
      ))}
    </Guide>

    <Guide title='Typography'>
      <Section emphasis='secondary'>
        {[ 'H1', 'H2', 'H3', 'H4', 'H5' ].map((name: string, i: number) =>{
          const C = T[name]
          return (
            <div key={i}>
              <Label>{name} header</Label>
              <C>This is a main header (T.{name})</C>
            </div>
          )
        })}

        <Label>Paragraph</Label>
        <T.P>
          This is a paragraph with a <T.A href='#'>link</T.A>.
        </T.P>

        <Label>Codeblock</Label>
        <Codeblock>
          This is some pre-formatted text.
        </Codeblock>
      </Section>
    </Guide>

  </Layout>
)
