import * as React from 'react'

interface IProps {
  categorize: Function,
  children?: any,
}

const Token = (props: IProps) =>
  <span onClick={() => props.categorize()}>
    {props.children}
  </span>

export default Token
