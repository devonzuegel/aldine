import * as React    from 'react'
import { Codeblock } from '~/components/Codeblock'
import { Section   } from '~/components/Section'
import { examples  } from '~/components/utils'
import * as T        from '~/components/Typography'

const Guide = (props) => (
  <div>
    <T.H2>{props.title}</T.H2>
    {props.children}
  </div>
)

const Label = (props) => (
  <T.Label faded>
    {props.children} ↘
  </T.Label>
)

export const Styleguide = () => (
  <div>
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

  </div>
)
