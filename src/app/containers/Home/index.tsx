import * as React from 'react'
const s = require('./style.css')
import parse from '../../parsers/tagged-prose'

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

const examples = (
  <div>
    {legend}
    {samples.map((s, i) =>
      <p key={i}>
        {parse(TAGS)(s)}
      </p>
    )}
  </div>
)

const themes = [
  { title: 'Black background, faded plaintext', className: 'dark-faded-plaintext'  },
  { title: 'Plain text',                        className: ''                      },
  { title: 'Faded plaintext',                   className: 'faded-plaintext-all'   },
  { title: 'Faded plaintext, nouns only',       className: 'faded-plaintext-nouns' },
  { title: 'Faded plaintext, verbs only',       className: 'faded-plaintext-verbs' },
]

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>

        {
          themes.map(({ title, className }, i) => (

            <div key={i}>
              <h1>{title}</h1>
              <div className={s[className]}>
                {examples}
              </div>
            </div>

          ))
        }

      </div>
    )
  }
}

export { Home }
