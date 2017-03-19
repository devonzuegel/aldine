import * as React from 'react'

import { Section } from '~/components/Section'
import { Label   } from '~/components/Typography'

interface IProps {
  children?: any,
  label: string,
}

type Type = React.StatelessComponent<IProps>

export const Example: Type = ({ children, label }) => (
  <Section emphasis='secondary'>
    {children}
    <Label faded>
      {label}
    </Label>
  </Section>
)
