import * as React from 'react'
import * as actions from '../../redux/modules/theme-changer/'
import { ThemeChangerComponent, IProps } from '../../components/ThemeChanger'
const { connect } = require('react-redux')

@connect(
  state => ({ themeChanger: state.themeChanger }),
  dispatch => ({
    update: (className: string) => dispatch(actions.update(className)),
  })
)
export class ThemeChanger extends React.Component<IProps, void> {
  public render() {
    return <ThemeChangerComponent {...this.props} />
  }
}
