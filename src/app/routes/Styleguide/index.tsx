import * as React             from 'react'
import { Codeblock }          from '~/components/Codeblock'
import { Section }            from '~/components/Section'
import { H1, H2, H3, H4, H5 } from '~/components/Typography'
import { examples }           from '~/components/utils'

export const Styleguide = () => (
  <div>
    <H3 faded>
      Section
    </H3>

    {examples(({ attitude, emphasis }) => (
      <div>
        <label>
          ({attitude}, {emphasis})
        </label>

        <Section {...{ attitude, emphasis }}>
          This is some text inside of a section.
        </Section>
      </div>
    ))}

    <H3 faded>
      Codeblock
    </H3>

    <Codeblock>
      This is some pre-formatted text.
    </Codeblock>

    <H3 faded>
      Typography
    </H3>

    <H1>
      This is a main header (H1)
    </H1>

    <H2>
      This is a main header (H2)
    </H2>

    <H3 faded>
      This is a main header (H3)
    </H3>

    <H4>
      This is a main header (H4)
    </H4>

    <H5>
      This is a main header (H5)
    </H5>
  </div>
)
