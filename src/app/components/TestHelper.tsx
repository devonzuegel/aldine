import * as React      from 'react'
import { mount       } from 'enzyme'
import { Provider    } from 'react-redux'
import { createStore } from 'redux'
import rootReducer     from '~/redux/reducers'

const fetchMock = require('fetch-mock')
const mockStore = require('redux-mock-store')

const renderComponent = (Component, state?, props?) =>
  mount(
    <Provider store={createStore(rootReducer, state)}>
      <Component {...props} />
    </Provider>
  )

const stringify = (x: any, condensed: boolean = true) => {
  if (condensed) {
    JSON.stringify(x, null, 2).replace(/ \}\,\n  \{/g, '}, {')
  } else {
    JSON.stringify(x)
  }
}

const p = (x: any, str: boolean = true, condensed: boolean = true) => {
  if (str) {
    console.log(stringify(x, condensed))
  } else {
    console.log(x)
  }
}

const klass = (className: string) => `.${className}`

export { mockStore, fetchMock, renderComponent, p, stringify, klass }
