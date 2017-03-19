import * as React      from 'react'
import * as classnames from 'classnames'

const s = require('./style.css')

export type Spacing   = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
export type Width     = 'small' | 'medium' | 'large' | 'full'
export type Alignment = 'left' | 'center' | 'right'

interface IProps {
  children?: any

  debug?:  boolean
  inline?: boolean

  width?:     Width
  textAlign?: Alignment
  boxAlign?:  Alignment

  marginBottom?: Spacing
  marginTop?:    Spacing
  marginLeft?:   Spacing
  marginRight?:  Spacing

  paddingBottom?: Spacing
  paddingTop?:    Spacing
  paddingLeft?:   Spacing
  paddingRight?:  Spacing

}

type Type = React.StatelessComponent<IProps>

export const Box: Type = (props: IProps) => {
  const marginBottom  = props.marginBottom  || 'medium'
  const marginTop     = props.marginTop     || 'medium'
  const marginLeft    = props.marginLeft    || 'medium'
  const marginRight   = props.marginRight   || 'medium'
  const paddingBottom = props.paddingBottom || 'medium'
  const paddingTop    = props.paddingTop    || 'medium'
  const paddingLeft   = props.paddingLeft   || 'medium'
  const paddingRight  = props.paddingRight  || 'medium'

  const className = classnames({
    [s['box']]:    true,
    [s['debug']]:  props.debug,
    [s['inline']]: props.inline,

    [s[`width-${props.width}`]]:          !!props.width,
    [s[`text-align-${props.textAlign}`]]: !!props.textAlign,
    [s[`box-align-${props.boxAlign}`]]:   !!props.boxAlign,

    [s[`margin-bottom-${marginBottom}`]]: true,
    [s[`margin-top-${marginTop}`]]:       true,
    [s[`margin-left-${marginLeft}`]]:     true,
    [s[`margin-right-${marginRight}`]]:   true,

    [s[`padding-bottom-${paddingBottom}`]]: true,
    [s[`padding-top-${paddingTop}`]]:       true,
    [s[`padding-left-${paddingLeft}`]]:     true,
    [s[`padding-right-${paddingRight}`]]:   true,
  })
  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
