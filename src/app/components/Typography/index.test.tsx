import * as React from 'react'
import { mount  } from 'enzyme'
import { expect } from 'chai'

import { H1, H2, H3, H4, H5 } from './index'

const assertTextChildren = (Component, text) =>
  expect(mount(<Component>{text}</Component>).text()).to.eql(text)

describe('<Typography />', () => {
  describe('Headers', () => {

    it('has children', () => {
      [ H1, H2, H3, H4, H5 ].map(c => assertTextChildren(c, 'Lorem ipsum'))
    })

  })
})
