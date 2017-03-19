import * as R     from 'ramda'
import * as React from 'react'

export const attitudes = [ 'neutral', 'positive', 'negative' ]
export const emphases  = [ 'primary', 'secondary' ]
export const examples  = (Component) => (
  emphases.map((emphasis: string, j: number) =>
    attitudes.map((attitude: string, i: number) =>
      <Component key={`${i}-${j}`} {...{ attitude, emphasis }} />
    )
  )
)

export const propTypes = (props) => R.merge(props, {
  attitude: React.PropTypes.oneOf(attitudes),
  emphasis: React.PropTypes.oneOf(emphases),
})

export const defaultProps = (props = {}) => R.merge(props, {
  emphasis: 'primary',
  attitude: 'neutral',
})

export const capitalize   = (s: string): string => s[0].toUpperCase() + s.slice(1)
export const uncapitalize = (s: string): string => s[0].toLowerCase() + s.slice(1)

export const camelToDash = (s: string): string =>
  s.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2')

export const dashToCamel = (s: string): string =>
  capitalize(s.replace(/\W+(.)/g, (_, chr) => capitalize(chr)))

export const spaceToCamel = (s: string): string =>
  uncapitalize(s.replace(/\W+(.)/g, (_, chr) => capitalize(chr)))

/** Utility function to create a K:V from a list of strings */
export function strEnum<T extends string>(obj: Array<T>): {[K in T]: K} {
  return obj.reduce((soFar, key) => ({ ...soFar, key }), Object.create(null))
}
