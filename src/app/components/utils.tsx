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
