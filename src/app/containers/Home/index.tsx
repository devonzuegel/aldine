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

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <h1>Black background, faded plaintext</h1>
        <div className={s['dark-faded-plaintext']}>
          {examples}
        </div>

        <h1>Plain text</h1>
        <div>
          {examples}
        </div>

        <hr />

        <h1>Faded plaintext</h1>
        <div className={s['faded-plaintext-all']}>
          {examples}
        </div>

        <hr />

        <h1>Faded plaintext, nouns only</h1>
        <div className={s['faded-plaintext-nouns']}>
          {examples}
        </div>

        <h1>Faded plaintext, verbs only</h1>
        <div className={s['faded-plaintext-verbs']}>
          {examples}
        </div>
      </div>
    )
  }
}

export { Home }
