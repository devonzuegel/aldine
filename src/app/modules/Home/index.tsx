import * as React from 'react'
const s = require('./style.css')
import parse from '~/parsers/tagged-prose'
import { ThemeChanger } from '~/modules/ThemeChanger'
import { update } from '~/modules/ThemeChanger/redux'
import { IThemeChanger } from '~/models/theme-changer'
const { connect } = require('react-redux')

const TAGS = {
  '**': s.noun,
  __:   s.verb,
  '~~': s.highlight,
}

const samples = [
  '**This** __is__ some ~~annotated~~ **text**',
  require('./samples/all-nouns-all-verbs.md?raw'),
  require('./samples/proper-nouns-all-verbs.md?raw'),
  require('./samples/all-nouns-all-verbs-proper-nouns-emphasized.md?raw'),
  require('./samples/proper-nouns-conceptual-chunks-all-verbs.md?raw'),
]

const legendKeys = [
  '~~highlight~~',
  '**nouns**',
  '__verbs__',
]
const legend = (
  <div className={s.legend}>
    <ul>
      {legendKeys.map((l, i) =>
        <li key={i}>
          {parse(TAGS)(l)}
        </li>
      )}
    </ul>
  </div>
)

const themes = [
  { title: 'Plain text',                        className: s['']                      },
  { title: 'Black background, faded plaintext', className: s['dark-faded-plaintext']  },
  { title: 'Faded plaintext',                   className: s['faded-plaintext-all']   },
  { title: 'Faded plaintext, nouns only',       className: s['faded-plaintext-nouns'] },
  { title: 'Faded plaintext, verbs only',       className: s['faded-plaintext-verbs'] },
]

interface IProps {
  themeChanger: IThemeChanger,
  update: Redux.ActionCreator,
}

@connect(
  state => ({ themeChanger: state.themeChanger }),
  dispatch => ({
    update: (className: string) => dispatch(update(className)),
  })
)
class Home extends React.Component<IProps, any> {
  public render() {
    const { themeChanger } = this.props

    return (
      <div className={s.home}>

        <ThemeChanger {...this.props} themes={themes} />

        <div className={themeChanger.className}>
          {legend}

          {samples.map((s, i) =>
            <p key={i}>
              {parse(TAGS)(s)}
            </p>
          )}
        </div>

      </div>
    )
  }
}

export { Home }
