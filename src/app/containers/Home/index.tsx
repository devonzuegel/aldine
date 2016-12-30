import * as React from 'react'
const s = require('./style.css')
import parse from '../../parsers/tagged-prose'
// const sample = require('./sample.md')
// import sample from './sample.md'

const TAGS = {
  '**': s.noun,
  __:   s.verb,
  '~~': s.highlight,
}

const example1 = parse(TAGS)('**This** __is__ some ~~annotated~~ **text**')
const example2 = parse(TAGS)(`
  The **book** __theorized__ that sufficiently intense **competition** for suburban **houses** in
  good **school districts** __meant__ that **people** __had to throw away__ lots of other **values** –
  **time at home** with their **children**, financial **security** – __to optimize__ for
  **house-buying-ability** or else __be consigned__ to the ghetto.
`)
const example3 = parse(TAGS)(`
  The **book** __theorized__ that sufficiently intense **competition** for suburban houses in
  good school districts __meant__ that **people** __had to throw away__ lots of other values –
  time at home with their children, financial security – __to optimize__ for
  house-buying-ability or else __be consigned__ to the ghetto.
`)
const example4 = parse(TAGS)(`
  The ~~book~~ __theorized__ that sufficiently intense ~~competition~~ for **suburban houses** in
  good **school districts** __meant__ that ~~people~~ __had to throw away__ lots of other
  **values** – **time** at home with their **children**, financial **security** – __to optimize__ for
  **house-buying-ability** or else __be consigned__ to the **ghetto**.
`)
const example5 = parse(TAGS)(`
  The ~~book~~ __theorized__ that **sufficiently intense** ~~competition~~ for **suburban houses** in
  **good school districts** __meant__ that ~~people~~ __had to throw away__ lots of other
  **values** – **time at home with their children**, **financial security** – __to optimize__ for
  **house-buying-ability** or else __be consigned__ to the **ghetto**.
`)
const examples = (<div>
  <div className={s.legend}>
    <ul>
      <li>{parse(TAGS)('~~highlight~~')}</li>
      <li>{parse(TAGS)('**nouns**')}</li>
      <li>{parse(TAGS)('__verbs__')}</li>
    </ul>
  </div>
  <p>{example2}</p>
  <p>{example3}</p>
  <p>{example4}</p>
  <p>{example4}</p>
  <p>{example5}</p>
  <p>{example5}</p>
  <p>{example5}</p>
</div>)

class Home extends React.Component<any, any> {
  public render() {
    // return sample
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
