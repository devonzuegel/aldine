import * as React      from 'react'
import * as classnames from 'classnames'

import * as Spacing   from '~/models/Spacing'
import * as Width     from '~/models/Width'
import * as Alignment from '~/models/Alignment'

const s = require('./style.css')

interface IProps {
  children?: any

  debug?:  boolean
  inline?: boolean

  width?:     Width.Type
  textAlign?: Alignment.Type
  boxAlign?:  Alignment.Type

  margin?:       Spacing.Type
  marginBottom?: Spacing.Type
  marginTop?:    Spacing.Type
  marginLeft?:   Spacing.Type
  marginRight?:  Spacing.Type

  padding?:       Spacing.Type
  paddingBottom?: Spacing.Type
  paddingTop?:    Spacing.Type
  paddingLeft?:   Spacing.Type
  paddingRight?:  Spacing.Type

}

type Type = React.StatelessComponent<IProps>

export const Box: Type = (props: IProps) => {
  const marginBottom  = props.marginBottom  || props.margin  || 'medium'
  const marginTop     = props.marginTop     || props.margin  || 'medium'
  const marginLeft    = props.marginLeft    || props.margin  || 'medium'
  const marginRight   = props.marginRight   || props.margin  || 'medium'
  const paddingBottom = props.paddingBottom || props.padding || 'medium'
  const paddingTop    = props.paddingTop    || props.padding || 'medium'
  const paddingLeft   = props.paddingLeft   || props.padding || 'medium'
  const paddingRight  = props.paddingRight  || props.padding || 'medium'

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
