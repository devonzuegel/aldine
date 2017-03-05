import * as React from 'react'
const { connect } = require('react-redux')
import * as C from '~/components/ThemeChanger'
import * as actions from './redux'

@connect(
  state => ({ themeChanger: state.themeChanger }),
  dispatch => ({
    update: (className: string) => dispatch(actions.update(className)),
  })
)
export class ThemeChanger extends React.Component<C.IProps, void> {
  public render() {
    return <C.ThemeChanger {...this.props} />
  }
}
