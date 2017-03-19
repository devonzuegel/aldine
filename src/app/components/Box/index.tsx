import * as React      from 'react'
import * as classnames from 'classnames'

import * as Spacing   from './types/Spacing'
import * as Width     from './types/Width'
import * as Alignment from './types/Alignment'

const s = require('./style.css')

interface IProps {
  children?: any

  debug?:  boolean
  inline?: boolean

  width?:     Width.Type
  textAlign?: Alignment.Type
  boxAlign?:  Alignment.Type

  marginBottom?: Spacing.Type
  marginTop?:    Spacing.Type
  marginLeft?:   Spacing.Type
  marginRight?:  Spacing.Type

  paddingBottom?: Spacing.Type
  paddingTop?:    Spacing.Type
  paddingLeft?:   Spacing.Type
  paddingRight?:  Spacing.Type

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
