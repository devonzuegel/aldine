import * as React             from 'react'
import { Codeblock }          from '~/components/Codeblock'
import { H1, H2, H3, H4, H5 } from '~/components/Typography'

export const Styleguide = () => (
  <div>
    <h3>
      Codeblock
    </h3>

    <Codeblock>
      This is some pre-formatted text.
    </Codeblock>

    <h3>
      Typography
    </h3>

    <H1>
      This is a main header (H1)
    </H1>

    <H2>
      This is a main header (H2)
    </H2>

    <H3>
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