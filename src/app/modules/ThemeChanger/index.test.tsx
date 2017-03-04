import { expect } from 'chai'
import { renderComponent } from 'components/TestHelper'
import { ThemeChanger } from './index'

/** Mock App. State */
const state = {
  themeChanger: { className: 'dark-faded-plaintext' },
}
const styles = require('components/ThemeChanger/style.css')

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

describe('<ThemeChanger />', () => {
  beforeEach(() => {
    this.component = renderComponent(ThemeChanger, state, props)
  })

  it('updates the active selector when that selector is clicked', () => {
    const themeElems = this.component.find(selectorClass)
    const [ first, last ] = [ themeElems.first(), themeElems.last() ]
    const active = `${styles.themeSelector} ${styles.active}`

    expect(first.props().className).to.eql(active)
    expect(last.props().className).to.eql(styles.themeSelector)

    last.simulate('click')

    expect(first.props().className).to.eql(styles.themeSelector)
    expect(last.props().className).to.eql(active)
  })
})
