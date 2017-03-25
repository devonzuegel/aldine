import * as React from 'react'
import * as R     from 'ramda'

export interface Match {
  test: RegExp,
  className: string,
}

interface IProps {
  matches: Match[],
  input:   string,
}

export const MatchParse: React.StatelessComponent<IProps> = ({ matches, input }) => {
  const match = matches[0]
  return (
    <div>{JSON.stringify(R.split(match.test, input))}</div>
  )
}
