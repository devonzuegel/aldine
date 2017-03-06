import * as React from 'react'

const essay = require('raw-loader!./essay.md')

type Type = React.StatelessComponent<null>

export const Home: Type = () => (
  <div>{essay}</div>
)
