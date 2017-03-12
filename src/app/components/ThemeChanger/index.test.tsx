import * as R from 'ramda'
import * as React from 'react'
import * as chai from 'chai'
import * as spies from 'chai-spies'
import { mount } from 'enzyme'
import { ThemeChanger } from './index'

const expect = chai.expect
chai.use(spies)

/** Mock App. State */
const state = {
  themeChanger: { className: 'dark-faded-plaintext' },
}
const styles = require('./style.css')
const selectorClass = `.${styles.themeSelector}`
const props = {
  themes: [
    { title: 'Black background, faded plaintext', className: 'dark-faded-plaintext'  },
    { title: 'Plain text',                        className: ''                      },
    { title: 'Faded plaintext',                   className: 'faded-plaintext-all'   },
    { title: 'Faded plaintext, nouns only',       className: 'faded-plaintext-nouns' },
    { title: 'Faded plaintext, verbs only',       className: 'faded-plaintext-verbs' },
  ],
}

const update    = chai.spy(() => null)
const component = mount(
  <ThemeChanger
    themeChanger={state.themeChanger}
    update      ={update}
    themes      ={props.themes}
  />
)

describe('<ThemeChanger />', () => {
  it('renders with correct style', () => {
    expect(component.find(styles.themeChanger)).to.exist
  })

  it('renders theme selectors', () => {
    const themeElems = component.find(selectorClass)
    const themeNames = props.themes.map(R.prop('title'))

    expect(themeElems).to.have.length(5)
    expect(themeElems.map((n) => n.text())).to.eql(themeNames)
  })

  it('updates the active selector when that selector is clicked', () => {
    const themeElems = component.find(selectorClass)
    const [ first, last ] = [ themeElems.first(), themeElems.last() ]
    const active = `${styles.themeSelector} ${styles.active}`

    expect(first.props().className).to.eql(active)
    expect(last.props().className).to.eql(styles.themeSelector)

    last.simulate('click')
    const themeClassNames = props.themes.map(R.prop('className'))
    expect(update).to.have.been.called.with(R.last(themeClassNames))
  })
})
