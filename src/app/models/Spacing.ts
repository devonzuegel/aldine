import { strEnum } from '~/components/utils'

/** Create a K:V */
export const Enum = strEnum([
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
])

/** Create a Type */
export type Type = keyof typeof Enum
