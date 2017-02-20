import * as React from 'react'
import * as R     from 'ramda'
import { mount  } from 'enzyme'
import { expect } from 'chai'
import { klass  } from '~/helpers/TestHelper'

import { H1, H2, H3, H4, H5 } from './index'

const s = require('./style.css')

const assertTextChildren = (Component, text) =>
  expect(mount(<Component>{text}</Component>).text()).to.eql(text)

describe('<Typography />', () => {
  describe('Headers', () => {

    beforeEach(() => {
    })

    it('has children', () => {
      [ H1, H2, H3, H4, H5 ].map(c => assertTextChildren(c, 'Lorem ipsum'))
    })

  })
})
