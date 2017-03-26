import { strEnum } from '~/components/utils'

/** Create a K:V */
export const Enum = strEnum([
  'left',
  'center',
  'right',
])

/** Create a Type */
export type Type = keyof typeof Enum
