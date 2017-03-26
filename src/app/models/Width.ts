import { strEnum } from '~/components/utils'

/** Create a K:V */
export const Enum = strEnum([
  'small',
  'medium',
  'large',
  'full',
])

/** Create a Type */
export type Type = keyof typeof Enum
